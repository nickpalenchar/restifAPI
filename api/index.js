var apiRouter = require('express').Router();

var guard = require('../helpers/guard');

apiRouter.get('/', function (req, res) {
    res.status(203).send("the sub server worked woweee");
});

apiRouter.use('/dev', guard.requireDevelopment, require('./_dev'));
apiRouter.use('/client', require('./client'));

module.exports = apiRouter;