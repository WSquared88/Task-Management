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

var startupFailed = function(err) {
    throw err;
};

var tasks = [
        new Promise(mongoConnector),
        new Promise(redisConnector),
        new Promise(someStartupTask)
];
  
/** A promise is a non-blocking piece of code that will eventually return
the result from a set of code (may it be running something or giving a return value)
Promises are asynchronous but not necessarily parallel (since each Node process is single threaded unless 
you start more). Instead promises take an operation out of synchronous code and give you a placeholder **/
//Promise.all manages an iterable list of promises or functions. When they all are successful, then the "then" function is called
//If one fails, then the catch is fired instead. 
var startup = new Promise.all(tasks);
startup.then(startupComplete);
startup.catch(startupFailed);