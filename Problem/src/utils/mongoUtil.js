//Receive the async callback from the async task
var connectToMongo = function(callback) {
    console.log('Here would be a bunch of async code to connect to Mongo');
    
    //timeout is here only to introduce delay in our example (more asynchronous call)
    setTimeout(function(){
        //when code completed, call the resolve or reject callbacks either passing in a return value or an error reason
        callback(); //return anything you need
    }, 2000);
};

//export the connectToMongo function
module.exports.connectToMongo = connectToMongo;