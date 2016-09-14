var chalk = require('chalk');

module.exports.logRequest = function(req, res, next) {
    ///// LOGGING SYSTEM ////
    console.log(req.header("Accept-Version"));
    console.log("--- NEW REQUEST ---");
    console.log(new Date());
    console.log(chalk.red("METHOD: " + req.method));
    console.log(chalk.yellow("PATH: "  + req.path));
    console.log(chalk.cyan("BODY: "    + (JSON.stringify(req.body) || "{}")));
    next();
};

module.exports.catchError =  function (req, res) {
    try {
        res.send(404, "something might not be right")
    } catch(e) {
        if(e.message === "Can't set headers after they are sent.") {
            console.log(chalk.red("WARNING: A response was sent, but got to error handling."));
            console.log(chalk.gray("Make sure you are not calling ") + "next()" + chalk.gray(" in the same block where you use ") +
                "res.send()" + chalk.gray(" middleware that successfully sends a response should not be able to continue to " +
                    "error handling. This is an antipattern."));
        }
        else throw e;
    }
};