import makeAddUser from "./add-user";
import { userModel } from "../../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import makeLoginUser from "./login";
const addUser = makeAddUser({ userModel, encryptPassword: bcrypt });
const loginUser = makeLoginUser({ userModel, jwt });
const userServices = Object.freeze({
  addUser,
  loginUser
});

export default userServices;
export { addUser };
