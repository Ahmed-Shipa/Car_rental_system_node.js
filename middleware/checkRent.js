import { ObjectId } from "mongodb";
import db from "../dbConnection/dbConnection.js";

const checkRent = async (req, res, next) => {
  const car = await db
    .collection("cars")
    .findOne({ _id: new ObjectId(req.body.carId) });
  console.log(car);
  // check if the car is rented or not
  if (car.rentalStatus == "rented") {
    res.json({ message: "this car is rented" });
  } else {
    const newRental = await db.collection("rentals").insertOne({
      carId: new ObjectId(req.body.carId),
      customerId: new ObjectId(req.body.customerId),
      rentalDate: req.body.rentalDate,
      returnDate: req.body.returnDate,
    });
    // set this car is rented in order not to be rented again
    await db
      .collection("cars")
      .updateOne(
        { _id: new ObjectId(req.body.carId) },
        { $set: { rentalStatus: "rented" } }
      );
    next();
  }
};
// }
export default checkRent;
