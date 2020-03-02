import jwt from "jsonwebtoken";
import { userModel } from "../models";

const Auth = async (req, res, next) => {
  if (!req.header("Authorization")) {
    throw { message: "Tokent not found" };
  }
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const data = jwt.verify(token, process.env.JWT_KEY);
    const user = await userModel.findById(data._id);
    if (!user) {
      throw { message: "User not found" };
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ message: "Not authorized to access this resource" });
  }
};

export default Auth;
