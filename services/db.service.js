const MongoClient = require('mongodb').MongoClient;
const config = require('../config/index');

const dbName = 'notice_db';

let dbConn = null;

async function getCollection(collectionName) {
    const db = await connect();
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
        return dbConn = client.db(dbName);
    } catch (err) {
        console.log('Cannot connect to DB', err);
        throw err;
    }
}

module.exports = {
    getCollection
}