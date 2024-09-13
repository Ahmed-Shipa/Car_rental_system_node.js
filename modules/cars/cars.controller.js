import db from "../../dbConnection/dbConnection.js";
import { ObjectId } from "mongodb";

// Get all cars
const getAllCars = async (req, res) => {
  const cars = await db.collection("cars").find().toArray();
  res.json(cars);
};

// Get a specific car
const getSpecificCar = async (req, res) => {
  const Id = new ObjectId(req.params.id);
  const car = await db.collection("cars").findOne({ _id: Id });
  if (car == null) {
    res.json({ message: "car is not found" });
  } else {
    res.json(car);
  }
};

// Get car by query name
const getCarByQuery = async (req, res) => {
  const car = await db.collection("cars").findOne({ name: req.query.name });
  if (car == null) {
    res.json({ message: "car not found" });
  } else {
    res.json({ car });
  }
};

// Get available car with specific model
const getCarByModel = async (req, res) => {
  const car = await db
    .collection("cars")
    .find({
      rentalStatus: req.query.rentalStatus,
      model: req.query.model,
    })
    .toArray();
  if (car.length == 0) {
    res.json({ message: "car not found" });
  } else {
    res.json(car);
  }
};

// Get available car with specific model or rented car with specific model
const getCarByAvailableOrRented = async (req, res) => {
  const car = await db
    .collection("cars")
    .find({
      $or: [
        { rentalStatus: "available", model: req.params.model },
        { rentalStatus: "rented", model: req.params.model },
      ],
    })
    .toArray();
  if (car.length == 0) {
    res.json({ message: "car not found" });
  } else {
    res.json(car);
  }
};

// Get available car by rent or model
const getCarByRentOrModel = async (req, res) => {
  const car = await db
    .collection("cars")
    .find({
      $or: [{ rentalStatus: "rented" }, { model: req.params.model }],
    })
    .toArray();
  if (car.length == 0) {
    res.json({ message: "car not found" });
  } else {
    res.json(car);
  }
};

// addCar
const addCar = async (req, res) => {
  const car = await db.collection("cars").insertOne(req.body);
  res.status(201).json({ message: "car added", car });
};

// updateCar
const updateCar = async (req, res) => {
  const car = await db
    .collection("cars")
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
  res.status(201).json({ message: "updated", car });
};

// deleteCar
const deleteCar = async (req, res) => {
  const car = await db
    .collection("cars")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ message: "deleted", car });
};
export {
  getAllCars,
  getSpecificCar,
  addCar,
  updateCar,
  deleteCar,
  getCarByQuery,
  getCarByModel,
  getCarByRentOrModel,
  getCarByAvailableOrRented,
};
