
module.exports.getMain = function (req, res) {
    console.log("got here");
    res.status(200).send("CLIENT STUFF ON VERSION 2 (latest)");
};

module.exports.getMain_1 = function (req, res) {
    res.status(200).send("this is the old version 1");
};