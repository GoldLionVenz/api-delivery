import makeAddUser from "./add-user";
import { userModel } from "../../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import makeLoginUser from "./login";
import makeUpdateUser from "./update-user";
const addUser = makeAddUser({ userModel, encryptPassword: bcrypt });
const loginUser = makeLoginUser({ userModel, jwt });
const updateUser = makeUpdateUser({ userModel })
const userServices = Object.freeze({
  addUser,
  loginUser,
  updateUser
});

export default userServices;
export { addUser };
