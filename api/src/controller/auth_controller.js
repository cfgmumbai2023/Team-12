const Creator = require('../db/creator');
const Consumer = require('../db/consumer');
const Video = require('../db/video');

exports.RegisterConsumer = async(req, res) => {
    const consumer = new Consumer(req.body);

    console.log(consumer);
    await consumer.save((err, doc) => {
        if (err) {
            console.log(err);
            return res.status(422).json({ errors: err })
        } else {
            const consumerData = {
                name: doc.name,
                number: doc.number,
                email: doc.email,
            }
            return res.status(200).json({
                success: true,
                message: 'Successfully Signed Up',
                consumerData
            })
        }
    });
};

exports.RegisterCreator = async(req, res) => {
    const creator = new Creator(req.body);
    console.log(creator);
    await creator.save((err, doc) => {
        if (err) {
            console.log(err);
            return res.status(422).json({ errors: err })
        } else {
            const creatorData = {
                name: doc.name,
                number: doc.number,
                email: doc.email,
            }
            return res.status(200).json({
                success: true,
                message: 'Successfully Signed Up',
                creatorData
            })
        }
    });
};

exports.LoginConsumer = (req, res) => {
    Consumer.findOne({ 'email': req.body.email }, (err, consumer) => {
        console.log("Came to log in consumer");
        if (!consumer) {
            return res.status(404).json({ success: false, message: 'Consumer not found!' });
        } else {
            consumer.comparePassword(req.body.password, (err, isMatch) => {
                console.log(isMatch);
                //isMatch is eaither true or false
                if (!isMatch) {
                    return res.status(400).json({ success: false, message: 'Wrong Password!' });
                } else {
                    consumer.generateToken((err, consumer) => {
                        if (err) {
                            return res.status(400).send({ err });
                        } else {
                            const data = {
                                    userID: consumer._id,
                                    name: consumer.name,
                                    number: consumer.number,
                                    email: consumer.email,
                                    language: consumer.language
                                }
                                //saving token to cookie
                            res.cookie('authToken', consumer.token).status(200).json({
                                success: true,
                                message: 'Successfully Logged In!',
                                consumerData: data
                            })
                        }
                    });
                }
            });
        }
    });
};

exports.LoginCreator = (req, res) => {
    Creator.findOne({ 'email': req.body.email }, (err, creator) => {
        console.log("Came to log in creator");
        if (!creator) {
            return res.status(404).json({ success: false, message: 'Creator not found!' });
        } else {
            creator.comparePassword(req.body.password, (err, isMatch) => {
                console.log(isMatch);
                //isMatch is eaither true or false
                if (!isMatch) {
                    return res.status(400).json({ success: false, message: 'Wrong Password!' });
                } else {
                    consumer.generateToken((err, consumer) => {
                        if (err) {
                            return res.status(400).send({ err });
                        } else {
                            const data = {
                                    userID: creator._id,
                                    name: creator.name,
                                    number: creator.number,
                                    email: creator.email
                                }
                                //saving token to cookie
                            res.cookie('authToken', consumer.token).status(200).json({
                                success: true,
                                message: 'Successfully Logged In!',
                                consumerData: data
                            })
                        }
                    });
                }
            });
        }
    });
};

// save video to database
exports.saveVideo = async(req, res) => {
    const { title, description, link, classnumber, subject, lessonname, email } = req.body;
    const video = new Video({
        title,
        description,
        link,
        tags,
        classnumber,
        subject,
        lessonname,
        email,
    });
    await video.save((err, doc) => {
        if (err) {
            console.log(err);
            return res.status(422).json({ errors: err })
        } else {
            return res.status(200).json({
                success: true,
                message: 'Successfully Saved Video',
                videoData: doc
            })
        }
    });
}
                                    