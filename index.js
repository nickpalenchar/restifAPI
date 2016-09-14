var AWS = require('aws-sdk');
var creds = new AWS.SharedIniFileCredentials({ profile: 'personal' });
AWS.config.credentials = creds;

require('./server');