import express from "express";
import {
  addCar,
  deleteCar,
  getAllCars,
  getCarByAvailableOrRented,
  getCarByModel,
  getCarByQuery,
  getCarByRentOrModel,
  getSpecificCar,
  updateCar,
} from "./cars.controller.js";
const carRouter = express.Router();

carRouter.route("/").get(getAllCars).post(addCar);
carRouter.route("/:id").get(getSpecificCar).put(updateCar).delete(deleteCar);
carRouter.get("/car/one", getCarByQuery);
carRouter.get("/model/model/", getCarByModel);
carRouter.get("/rent/:model", getCarByRentOrModel);
carRouter.get("/status/:model", getCarByAvailableOrRented);
export { carRouter };
