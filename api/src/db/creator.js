const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); //for decrypting
const jwt = require('jsonwebtoken');

const creator = new mongoose.Schema({
    number: {
        type: String,
        required: [true, 'The number field is required!'],
        trim: true
    },
    name: {
        type: String,
        required: [true, 'The name field is required!'],
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: [true, 'The identity field is required!'],
        trim: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: [true, 'The password field is required!'],
        trim: true,
        maxlength: 100
    },
    gender: {
        type: String,
        required: [true, 'The password field is required!'],
        trim: true,
        maxlength: 100
    },
    token: {
        type: String
    },
    publicKey: {
        type: String
    }
}, { minimize: false });

creator.pre('save', function (next) { // ? next means
    var creator = this;
    if (creator.isModified('password')) { //checking if password field is available and modified
        bcrypt.genSalt(SALT, function (err, salt) {
            if (err) return next(err)
            bcrypt.hash(creator.password, salt, function (err, hash) {
                if (err) return next(err)
                creator.password = hash;
                next(); //calling save function
            });
        });
    } else {
        next();
    }
});
//for comparing the creator entered password with database duing login 
creator.methods.comparePassword = function (candidatePassword, callBack) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callBack(err);
        callBack(null, isMatch);
    });
}
//for generating token when loggedin
creator.methods.generateToken = function (callBack) {
    var creator = this;
    var token = jwt.sign(creator._id.toHexString(), process.env.SECRETE);
    creator.token = token;
    creator.save(function (err, creator) {
        if (err) return callBack(err)
        callBack(null, creator)
    });
};
//validating token for auth routes middleware
creator.statics.findByToken = function (token, callBack) {
    var creator = this;
    jwt.verify(token, process.env.SECRETE, function (err, decode) { //this decode must give creator._id if token is valid .ie decode=creator_id
        creator.findOne({ "_id": decode, "token": token }, function (err, creator) {
            if (err) return callBack(err);
            callBack(null, creator);
        });
    });
};

module.exports = Creator = mongoose.model('creator', creator);