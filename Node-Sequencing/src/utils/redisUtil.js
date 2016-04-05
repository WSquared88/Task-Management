var connectToRedis = function(callback) {
    console.log('Here would be a bunch of async code to connect to Redis');
    
    //Example of error handling
    //var err = new Error('bad things happen');
    //This would call the callback passing back an error that would stop execution
    //callback(err); 
        
    //when code completed, call the callback either passing no values or an error
    callback();
};

module.exports.connectToRedis = connectToRedis;