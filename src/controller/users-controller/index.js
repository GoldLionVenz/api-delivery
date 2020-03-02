import makeAddUser from "./add-user";
import makeLoginUser from "./login-user";
import { userServices } from "../../uses-cases";

const addUser = makeAddUser(userServices.addUser);
const loginUser = makeLoginUser(userServices.loginUser);
const userController = { addUser, loginUser };
export default userController;
