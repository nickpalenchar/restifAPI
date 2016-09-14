var express = require('express'),
    //noinspection JSAnnotator
    server = express(),
    chalk  = require('chalk');

var logger = require('./logger');

/// plugins ///


/// log each request ///
server.use(logger.logRequest);

server.get('/', function (req, res) {
    res.status(200).send("Hello from the server site");
});

server.get('/hello/:name', function (req, res, next) {
    res.status(200).send("Hello " + req.params.name + "!");
    next();
});

/// standard routes ////

server.post('/', function(req, res){
    res.send(201, "you posted something")
});

server.use('/api', require('./api'));

server.listen(5500, function (req, res, next) {
    console.log(chalk.magenta("Server is listening on port ") + chalk.blue("5500"));
});