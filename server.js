var express = require('express'),
    //noinspection JSAnnotator
    server = express(),
    chalk  = require('chalk');

var logger = require('./helpers/logger');

/// plugins ///


/// log each request ///
server.use(logger.logRequest);

server.get('/', function (req, res) {
    res.status(200).send("Hello from the server site");
});

server.use(function(req, res, next) {
    console.log(">>>> ", req.header('accept-version'));
    req.version = req.header('accept-version');
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