var Promise = require("bluebird");
var utils = require('./utils');

var mongoConnector = utils.mongoConnector;
var redisConnector = utils.redisConnector;

var someStartupTask = function(resolve, reject) {
    console.log('here would be some other task');
    //reject(new Error("here would be a rejected error"));
    resolve();
};

var startupComplete = function() {    
    console.log('tasks complete');
};