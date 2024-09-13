import { carRouter } from "../modules/cars/cars.routes.js";
import { customerRouter } from "../modules/customers/customers.routes.js";
import express from "express";
import { rentalRouter } from "../modules/rentals/rentals.routes.js";
const bootstrap = (app) => {
  app.use(express.json());
  app.use("/customers", customerRouter);
  app.use("/cars", carRouter);
  app.use("/rentals", rentalRouter);
  app.use("*", (req, res) => {
    res.json({ message: "not found" });
  });
};
export default bootstrap;
