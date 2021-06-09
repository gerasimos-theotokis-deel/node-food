const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://theotokis:theotokis@cluster0.muq43.mongodb.net/assesment?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

let db;

/**
 *
 * @param cb
 */
const dbConnect = cb => {
    client.connect().then(client => {
        console.log('Successful DB Connection');
        db = client.db("assesment");
        cb();
    }).catch((err) => {
        throw err;
    });
}

/**
 *
 * @returns {*}
 */
const getCollection = (collectionName) => {
    if(db){
        return db.collection(collectionName);
    }
    throw new Error('No collection found');
}

exports.dbConnect = dbConnect;
exports.getCollection = getCollection;

