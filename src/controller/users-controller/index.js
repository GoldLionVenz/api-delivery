import makeAddUser from "./add-user";
import makeLoginUser from "./login-user";
import makeUpdateUser from "./update-user";
import makeGenerateToken from "./generate-token";
import makeEditUserPassword from "./edit-user-password";
import { userServices } from "../../uses-cases";

const addUser = makeAddUser(userServices.addUser);
const loginUser = makeLoginUser(userServices.loginUser);
const updateUser = makeUpdateUser(userServices.updateUser);
const generateToken = makeGenerateToken(userServices.generateToken);
const editUserPassword = makeEditUserPassword(userServices.editPasswordUser);
const userController = {
  addUser,
  loginUser,
  updateUser,
  generateToken,
  editUserPassword
};
export default userController;
