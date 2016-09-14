var express = require('express'),
    //noinspection JSAnnotator
    server = express(),
    chalk  = require('chalk');

var logger = require('./helpers/logger');

/// plugins ///
// TODO: Add body parser plugin later.

// add a req.version (from accept-version header) for convience.
server.use(function(req, res, next) {
    req.version = req.header('accept-version');
    next();
});

/// log each request ///
server.use(logger.logRequest);

// test function for the root directory. GET /
server.get('/', function (req, res) {
    res.status(200).send("Hello from the server side");
});

/// standard routes ////
server.use('/api', require('./api'));

server.listen(5500, function (req, res, next) {
    console.log(chalk.magenta("Server is listening on port ") + chalk.blue("5500"));
});