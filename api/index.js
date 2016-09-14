var Router = require('restify-router').Router;
var apiRouter = new Router();
var userRouter = new Router();

apiRouter.get('/', function (req, res) {
    res.send(203, "the sub server worked woweee")
});

userRouter.get('/', function (req, res) {
    res.send(200, "YES");
});

// apiRouter.applyRoutes(userRouter, '/user');

module.exports = function(server){
    apiRouter.applyRoutes(server, '/api');
    /// sub routes
    require('./client')(server);
};