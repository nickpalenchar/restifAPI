var Router = require('express').Router;
var clientRouter = Router();
var versioning = require('../../helpers/versioning');

var controller = require('./client.controller');

// clientRouter.get('/', function(req, res){
//     if(req.version === "1" ) controller.getMain_1(req, res);
//     else controller.getMain(req, res);
// });

clientRouter.get('/', versioning({
    "1": controller.getMain_1,
    "2": controller.getMain,
    "3": function(req, res) { res.status(200).send("this is new")},
    // "bad-version": true,
    "default": controller.getMain
}));

// clientRouter.get('/', routesVersion({
//     "1": controller.getMain_1,
//     "2": controller.getMain
// }, function(){console.log("NOT FOUND")}));

module.exports = clientRouter;