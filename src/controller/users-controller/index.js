import makeAddUser from "./add-user";
import makeLoginUser from "./login-user";
import makeUpdateUser from "./update-user";
import { userServices } from "../../uses-cases";

const addUser = makeAddUser(userServices.addUser);
const loginUser = makeLoginUser(userServices.loginUser);
const updateUser = makeUpdateUser(userServices.updateUser);
const userController = { addUser, loginUser, updateUser };
export default userController;
