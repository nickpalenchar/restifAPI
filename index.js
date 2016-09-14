var restify = require('restify'),
    restifyPlugins = require('restify-plugins');
    //noinspection JSAnnotator
    server = restify.createServer(),
    chalk  = require('chalk');
var Router = require('restify-router').Router;

var logger = require('./logger');

/// restify plugins ///
server.use(restifyPlugins.bodyParser());
server.use(restifyPlugins.queryParser());

/// log each request ///
server.use(logger.logRequest);

server.get('/', function (req, res) {
    res.send(200, "Hello from the server site");
});

server.get('/hello/:name', function (req, res, next) {
    res.send(200, "Hello " + req.params.name + "!");
    next();
});

/// standard routes ////
require('./api')(server);

server.post('/', function(req, res){
    res.send(201, "you posted something")
});

server.use(logger.catchError);

server.listen(5500, function (req, res, next) {
    console.log(chalk.magenta("Server is listening on port ") + chalk.blue("5500"));
});