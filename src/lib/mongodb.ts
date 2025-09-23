import { MongoClient } from "mongodb";
import type { Db } from "mongodb";

const uri = import.meta.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

const client = new MongoClient(uri);

let db: Db;

export const connectDB = async () => {
  db = client.db("website");
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
};
