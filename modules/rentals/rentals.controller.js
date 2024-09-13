import db from "../../dbConnection/dbConnection.js";
import { ObjectId } from "mongodb";

// Get all rentals
const getAllRentals = async (req, res) => {
  const rentals = await db.collection("rentals").find().toArray();
  res.json(rentals);
};

// Get a specific rental
const getSpecificRental = async (req, res) => {
  const Id = new ObjectId(req.params.id);
  const rental = await db.collection("rentals").findOne({ _id: Id });
  if (rental == null) {
    res.json({ message: "rental is not found" });
  } else {
    res.json(rental);
  }
};

// addRental
const addRental = async (req, res) => {
  // start code in checkRent in the middleware
  res.status(201).json({ message: "rental added" });
};

// updateRental
const updateRental = async (req, res) => {
  const rental = await db.collection("rentals").updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        carId: new ObjectId(req.body.carId),
        customerId: new ObjectId(req.body.customerId),
        rentalDate: req.body.rentalDate,
        returnDate: req.body.returnDate,
      },
    }
  );
  res.status(201).json({ message: "updated", rental });
};

// deleteRental
const deleteRental = async (req, res) => {
  const rental = await db
    .collection("rentals")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ message: "deleted", rental });
};

const getCarByName = (req, res) => {
  res.json({
    name: req.query.name,
  });
};
export {
  getAllRentals,
  getSpecificRental,
  addRental,
  updateRental,
  deleteRental,
};
