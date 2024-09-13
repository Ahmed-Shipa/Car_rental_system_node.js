import db from "../dbConnection/dbConnection.js";
import bcrypt from "bcrypt";
// checkEmailForSignup
const checkEmailForSignup = async (req, res, next) => {
  const findEmail = await db
    .collection("customers")
    .findOne({ email: req.body.email });
  if (findEmail) {
    res.status(209).json({ message: "email already exists" });
  } else {
    req.body.password = bcrypt.hashSync(String(req.body.password), 8);
    next();
  }
};
// checkEmailForLogin
const checkEmailForLogin = async (req, res, next) => {
  const findEmail = await db
    .collection("customers")
    .findOne({ email: req.body.email });
  if (findEmail) {
    next();
  } else {
    res.json({ message: "email not found...please signUp" });
  }
};

export { checkEmailForSignup, checkEmailForLogin };
