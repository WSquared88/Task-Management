var async = require('async');
var utils = require('./utils');

var mongoConnector = utils.mongoConnector;
var redisConnector = utils.redisConnector;

var someStartupTask = function(callback) {
    console.log('here would be some other task');
    callback();
};

var startupComplete = function(err) {
    if(err) {
        throw err;
    }
    
    console.log('tasks complete');
};

var tasks = {
        
        mongo: function(asyncCallback) {
          mongoConnector(asyncCallback);
        },
        redis: function(asyncCallback) {
          redisConnector(asyncCallback);
        },
        startupTask: function(asyncCallback) {
           someStartupTask(asyncCallback); 
        }
    };

async.series(tasks, startupComplete);