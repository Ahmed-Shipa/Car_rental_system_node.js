import { ObjectId } from "mongodb";
import db from "../../dbConnection/dbConnection.js";

// Get all customers
const getAllCustomers = async (req, res) => {
  const customers = await db.collection("customers").find().toArray();
  res.json(customers);
};

// Get a specific customer
const getSpecificCustomer = async (req, res) => {
  const customer = await db
    .collection("customers")
    .findOne({ _id: new ObjectId(req.params.id) });
  if (customer == null) {
    res.json({ message: "customer is not found" });
  } else {
    res.json(customer);
  }
};

// signUp
const signUp = async (req, res) => {
  // endpoint starts in the checkEmail in the middleware
  const customer = await db.collection("customers").insertOne(req.body);
  res.status(201).json({ message: "customer added", customer });
};

// signIn;
const signIn = async (req, res) => {
  // endpoint starts in the checkEmail and CheckPassword in the middleware
  res.status(200).json({ message: "user found......login" });
};

// updateUser
const UpdateUser = async (req, res) => {
  const customer = await db
    .collection("customers")
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
  res.status(201).json({ message: "updated", customer });
};

// deleteUser
const deleteUser = async (req, res) => {
  const customer = await db
    .collection("customers")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ message: "deleted", customer });
};

export {
  getAllCustomers,
  getSpecificCustomer,
  signUp,
  signIn,
  UpdateUser,
  deleteUser,
};
