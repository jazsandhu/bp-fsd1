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
  
  db.collection("Users").insertOne({ 
    "name" : event.name,
    "email" :  event.email,
    "phone" :  event.phone,
    "address" :  event.address
  });

  const response = {
    statusCode: 200,
    message: "User Added To Database",
    _name:  event.name,
    _email:  event.email,
    _phone:  event.phone,
    _address:  event.address,
  };

  return response;
};
