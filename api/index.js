var Router = require('restify-router').Router;
var apiRouter = new Router();

apiRouter.get('/', function (req, res) {
    res.send(203, "the sub server worked woweee")
});

module.exports = apiRouter;