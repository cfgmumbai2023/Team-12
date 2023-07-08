const consumer = require('../db/consumer');
const consumerauth = (req, res, next) => {
    let token = req.cookies.authToken;

    consumer.findByToken(token, (err, consumer) => {
        if (err) throw err;
        if (consumer) {
            req.token = token
            req.consumer = consumer;
            req.isAuth = true;
            next();

        } else {
            req.isAuth = false;
            next();
        }

    });
}

module.exports = { consumerauth }