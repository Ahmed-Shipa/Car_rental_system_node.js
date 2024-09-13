import bcrypt from "bcrypt";
import db from "../dbConnection/dbConnection.js";
// checkPasswordForLogin
const checkPassword = async (req, res, next) => {
  const customer = await db
    .collection("customers")
    .findOne({ email: req.body.email });
  const hash = bcrypt.compareSync(
    String(req.body.password),
    String(customer.password)
  );
  if (!hash) {
    res.status(200).json({ message: "invalid password" });
  } else {
    next();
  }
};

export { checkPassword };
