var connectToMongo = function(callback) {
    console.log('Here would be a bunch of async code to connect to Mongo');
    
    callback();
};

module.exports.connectToMongo = connectToMongo;