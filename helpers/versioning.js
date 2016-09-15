module.exports = function versioning(versionObj) {

    var fallbackFn, badVersionFn;

    /// DETERMINE BAD REQUEST FUNCTION //////
    /// if `true`, use stock generic fn
    /// if a function, use that instead.
    if(versionObj.hasOwnProperty("bad-version") && versionObj["bad-version"]) {
        
        if(versionObj["bad-version"] === true) badVersionFn = function (req, res) {
            res.status(400).send("No version available for version requested");
        };
        else badVersionFn = versionObj["bad-version"];
    }

    //// DETERMINE DEFAULT FALLBACK FUNCTION////
    // if `false` (or not provided), will find the latest version for a fallback fn instead
    if(versionObj.hasOwnProperty("default") && versionObj.default) {
        /// use specified default function if no version found
        fallbackFn = versionObj.default

    } else {
        /// find latest version to use if no default & version found.
        var latestVersion = -Infinity;

        for(var k in versionObj) {
            if(versionObj.hasOwnProperty(k)) {
                if(parseInt(k) > latestVersion) latestVersion = parseInt(k);
            }
        }
        fallbackFn = versionObj[latestVersion];
    }

    //////////////////////////////
    //// middleware to return ////
    return function(req, res){

        if(req.version && versionObj[req.version])
            versionObj[req.version](req, res);

        else if (req.version && !versionObj[req.version] && badVersionFn)
            badVersionFn(req, res);
            
        else fallbackFn(req, res);
    }
};