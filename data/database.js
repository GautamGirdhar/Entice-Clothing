const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect('');
    database = client.db('online-shop');
}

function getDb() {
    if (!database) {
        throw new Error('you must connect first!');    
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}
