import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://peterhiku12:Indonesia77@cluster0.zsrhdmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
let db;
const connectDB = async () => {
  db = client.db("website");
};
const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
};

export { connectDB as c, getDB as g };
