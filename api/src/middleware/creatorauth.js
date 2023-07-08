const creator = require('../db/creator');
const creatorauth = (req, res, next) => {
    let token = req.cookies.authToken;

    creator.findByToken(token, (err, creator) => {
        if (err) throw err;
        if (creator) {
            req.token = token
            req.creator = creator;
            req.isAuth = true;
            next();

        } else {
            req.isAuth = false;
            next();
        }

    });
}

module.exports = { creatorauth }