var apiRouter = require('express').Router();
var guard = require('../helpers/guard');

// test for GET /api
apiRouter.get('/', function (req, res) {
    res.status(203).send("the sub server worked woweee");
});

// sub-routes
apiRouter.use('/dev', guard.requireDevelopment, require('./_dev')); // protected with guard middleware
apiRouter.use('/client', require('./client'));

module.exports = apiRouter;