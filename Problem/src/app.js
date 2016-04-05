//This example show how to run a number of tasks in parallel (all at the same time in any order) using promises and 
//call a function when they have all completed. 
//import our utils folder
var utils = require('./utils');

var mongoConnector = utils.mongoConnector;
var redisConnector = utils.redisConnector;

//task to run in serial with our other tasks
var someStartupTask = function(callback) {
    console.log('here would be some other task');

    setTimeout(function(){
        callback();
        //callback(new Error('failed startup task'));
    }, 1500);
};

//task to run when all of our other tasks have completed
var startupComplete = function() {    
    console.log('tasks complete');
};

//mongo
mongoConnector(function(err) {

    if(err) {
        throw err;
    }
    
    //redis
    redisConnector(function(err) {
        if(err) {
            throw err; 
        }
        
        //startup task
        someStartupTask(function(err) {
            if(err) {
                throw err;
            }
            
            //success
            startupComplete();
        });
    });
 
});