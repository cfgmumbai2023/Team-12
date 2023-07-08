const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //for decrypting
const jwt = require("jsonwebtoken");
const SALT = 10;

const consumer = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name field is required!"],
      trim: true,
      maxlength: 100,
    },
    schoolname: {
      type: String,
      required: [true, "The school field is required!"],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "The email field is required!"],
      trim: true,
      unique: 1,
    },
    class: {
      type: String,
      required: [true, "The class field is required!"],
      trim: true,
      maxlength: 100,
    },
    board: {
      type: String,
      required: [true, "The board field is required!"],
      trim: true,
      maxlength: 100,
    },
    password: {
      type: String,
      required: [true, "The password field is required!"],
      minlength: 3,
    },
    token: {
      type: String,
    },
    publicKey: {
      type: String,
    },
  },
  { minimize: false }
);

consumer.pre("save", function (next) {
  // ? next means
  var consumer = this;
  if (consumer.isModified("password")) {
    //checking if password field is available and modified
    bcrypt.genSalt(SALT, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(consumer.password, salt, function (err, hash) {
        if (err) return next(err);
        consumer.password = hash;
        next(); //calling save function
      });
    });
  } else {
    next();
  }
});
//for comparing the consumer entered password with database duing login
consumer.methods.comparePassword = function (candidatePassword, callBack) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callBack(err);
    callBack(null, isMatch);
  });
};
//for generating token when loggedin
consumer.methods.generateToken = function (callBack) {
  var consumer = this;
  var token = jwt.sign(consumer._id.toHexString(), process.env.SECRETE);
  consumer.token = token;
  consumer.save(function (err, consumer) {
    if (err) return callBack(err);
    callBack(null, consumer);
  });
};
//validating token for auth routes middleware
consumer.statics.findByToken = function (token, callBack) {
  var consumer = this;
  jwt.verify(token, process.env.SECRETE, function (err, decode) {
    //this decode must give consumer._id if token is valid .ie decode=consumer_id
    consumer.findOne({ _id: decode, token: token }, function (err, consumer) {
      if (err) return callBack(err);
      callBack(null, consumer);
    });
  });
};

module.exports = Consumer = mongoose.model("consumer", consumer);
