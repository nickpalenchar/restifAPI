var rtg = require('random-token-generator');
var Promise = require('bluebird');

const DEFAULT = {
    len: 16, // Generate 16 characters or bytes of data
    string: true, // Output keys as a hex string
    strong: false, // Use the crypographically secure randomBytes function
    retry: false // Retry once on error
};

// generateToken
module.exports.generateToken = function(opitons){
    opitons = opitons || DEFAULT;
    return new Promise(function(resolve, reject){
        rtg.generateKey(opitons, function(err, key){
            if(err) reject(err);
            else resolve(key);
        });
    })
};