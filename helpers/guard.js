var env = require('../env');

module.exports.requireDevelopment = function (req, res, next) {
    if(env.PROD) throw res.status(404).send();
    next();
};