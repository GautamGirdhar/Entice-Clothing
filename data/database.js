const mongodb = require("mongodb");
require("dotenv").config();

const MongoClient = mongodb.MongoClient;

let database;
const URI_KEY = process.env.URI_KEY;

async function connectToDatabase() {
  const client = await MongoClient.connect(URI_KEY);
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("you must connect first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
