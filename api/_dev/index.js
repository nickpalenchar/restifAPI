/// DEV ROUTES /////
// this is only available in development and
// should never be used in production.
// NOTE: although accessing routes in production would be a 403, the server will return a 404
// in order to remain elusive to the fact that these routes exist at all.
////////////////////////////////////////

var devRouter = require('express').Router();

devRouter.put('/', function (req, res) {
    res.status(200).send("heres the thing");
});

module.exports = devRouter;