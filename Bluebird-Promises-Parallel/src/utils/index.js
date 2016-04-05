//index.js is automatically pulled when a folder is required

//require our two utility modules
//connectToMongo in mongoUtil is called mongoConnector to the rest of the codebase 
module.exports.mongoConnector = require('./mongoUtil.js').connectToMongo;
//connectToRedis in redisUtil is called redisConnector to the rest of the codebase
module.exports.redisConnector = require('./redisUtil.js').connectToRedis;