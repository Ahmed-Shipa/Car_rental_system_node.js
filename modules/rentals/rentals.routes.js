import express from "express";
import {
  addRental,
  deleteRental,
  getAllRentals,
  getSpecificRental,
  updateRental,
} from "./rentals.controller.js";
import checkRent from "../../middleware/checkRent.js";
const rentalRouter = express.Router();

rentalRouter.route("/").get(getAllRentals).post(checkRent,addRental);
rentalRouter.route("/:id").get(getSpecificRental).put(updateRental).delete(deleteRental);

export { rentalRouter };
