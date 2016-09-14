var AWS = require('aws-sdk');
var creds = new AWS.SharedIniFileCredentials({ profile: 'personal' });
AWS.config.credentials = creds;

//start here for configureing stuff like aws, then start server below.

require('./server');