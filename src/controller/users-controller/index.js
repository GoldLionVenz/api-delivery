import makeAddUser from "./add-user"
import makeLoginUser from "./login-user"
import makeUpdateUser from "./update-user"
import makeGenerateToken from "./generate-token"
import makeEditUserPassword from "./edit-user-password"
import makeGetUsers from "./get-users"
import makeGetBalance from "./get-balance"
import { userServices } from "../../uses-cases"

const addUser = makeAddUser(userServices.addUser)
const loginUser = makeLoginUser(userServices.loginUser)
const updateUser = makeUpdateUser(userServices.updateUser)
const generateToken = makeGenerateToken(userServices.generateToken)
const editUserPassword = makeEditUserPassword(userServices.editPasswordUser)
const addSubUser = makeAddUser(userServices.addSubUser)
const getUsers = makeGetUsers(userServices.getUsers)
const getBalance = makeGetBalance(userServices.getBalance)
const activateUser = makeUpdateUser(userServices.activateUser)
const userController = {
  addUser,
  loginUser,
  updateUser,
  generateToken,
  editUserPassword,
  addSubUser,
  getUsers,
  getBalance,
  activateUser
}
export default userController
