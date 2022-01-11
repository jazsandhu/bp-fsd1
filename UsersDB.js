const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI =
  "mongodb+srv://jaz_sandhu:BrokerPocket2201@cluster0.8yrad.mongodb.net/BrokerPocket?retryWrites=true&w=majority";

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
      return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);

  const db = await client.db("BrokerPocket");

  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase();

  const users = JSON.parse(JSON.stringify(await db.collection("Users").find({}).toArray()));

  const response = {
      statusCode: 200,
      body: users
  };

  return response;
};
