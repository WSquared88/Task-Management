var Promise = require("bluebird");
var utils = require('./utils');

var mongoConnector = utils.mongoConnector;
var redisConnector = utils.redisConnector;

var someStartupTask = function() {
    console.log('here would be some other task');
};

var startupComplete = function() {    
    console.log('tasks complete');
};