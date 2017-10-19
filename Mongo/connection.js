var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://kasper8791:bobsi123@mongodbfun-shard-00-00-4bvwh.mongodb.net:27017,mongodbfun-shard-00-01-4bvwh.mongodb.net:27017,mongodbfun-shard-00-02-4bvwh.mongodb.net:27017/test?ssl=true&replicaSet=MongoDbFun-shard-0&authSource=admin' , { useMongoClient: true });



module.exports = { mongoose };