var Router = require('restify-router').Router;
var clientRouter = new Router();

function applyRoutes(server){
    clientRouter.get('/', function (req, res) {
        res.send(200, "YAASS YOU GOT THE CLIENT THING");
    });
    clientRouter.applyRoutes(server, '/client');
}
module.exports = applyRoutes;