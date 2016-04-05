//Receive the async callback from the async task
var connectToRedis = function(callback) {
    console.log('Here would be a bunch of code to connect to Redis');
        
    //timeout is here only to introduce delay in our example (more asynchronous call)
    setTimeout(function(){
        //when code completed, call the resolve or reject callbacks either passing in a return value or an error reason
        callback(); //return anything you need
        
        //Example of error handling
        //var err = new Error('bad things happen');
        //This would call the callback passing back an error that would stop execution
        //callback(err); 
    }, 1000);
};

//export the connectToRedis function
module.exports.connectToRedis = connectToRedis;