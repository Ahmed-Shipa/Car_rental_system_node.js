import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

client
  .connect()
  .then(() => {
    console.log(`database connected successfully`);
  })
  .catch((error) => {
    console.log(`database failed`, error);
  });
const db = client.db("car_rental_system");
export default db;
