var Router = require('express').Router;
var clientRouter = Router();
var routesVersion = require('express-routes-versioning')();

var controller = require('./client.controller');

clientRouter.get('/', function(req, res){
    if(req.version === "1" ) controller.getMain_1(req, res);
    else controller.getMain(req, res);
});




// clientRouter.get('/', routesVersion({
//     "1": controller.getMain_1,
//     "2": controller.getMain
// }, function(){console.log("NOT FOUND")}));

module.exports = clientRouter;