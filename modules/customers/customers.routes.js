import express from "express";
import {
  UpdateUser,
  deleteUser,
  getAllCustomers,
  getSpecificCustomer,
  signIn,
  signUp,
} from "./customers.controller.js";
import {
  checkEmailForLogin,
  checkEmailForSignup,
} from "../../middleware/checkEmail.js";
import { checkPassword } from "../../middleware/checkPassword.js";
const customerRouter = express.Router();

customerRouter.route("/").get(getAllCustomers).post(checkEmailForSignup, signUp)
customerRouter.route("/:id").get(getSpecificCustomer).put(UpdateUser).delete(deleteUser)
customerRouter.post("/login", checkEmailForLogin, checkPassword, signIn);

export { customerRouter };
