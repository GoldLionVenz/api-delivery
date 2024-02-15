import makeAddUser from "./add-user"
import { userModel } from "../../models"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import makeLoginUser from "./login"
import makeUpdateUser from "./update-user"
import makeGenerateToken from "./generate-token"
import sendMailService from "../../send-mail"
import makeEditPasswordUser from "./edit-user-password"
import { isTokenValid } from "../../helpers/"
import makeAddSubUser from "./add-sub-user"
import makeGetUsers from "./get-users"
import wavesServices from "../waves"
import makeGetBalance from "./get-balance"
import makeActivateUser from "./activate-user"
const addUser = makeAddUser({
  userModel,
  encryptPassword: bcrypt,
  createWallet: wavesServices.createWallet
})
const loginUser = makeLoginUser({ userModel, jwt })
const updateUser = makeUpdateUser({ userModel })
const generateToken = makeGenerateToken({ userModel, sendMailService })
const editPasswordUser = makeEditPasswordUser({
  userModel,
  encryptPassword: bcrypt,
  isTokenValid
})
const addSubUser = makeAddSubUser({
  userModel,
  encryptPassword: bcrypt,
  createWallet: wavesServices.createWallet
})
const getUsers = makeGetUsers({ userModel })
const getBalance = makeGetBalance({ getBalanceService: wavesServices.getBalance })
const activateUser = makeActivateUser({ userModel })
const userServices = Object.freeze({
  addUser,
  loginUser,
  updateUser,
  generateToken,
  editPasswordUser,
  addSubUser,
  getUsers,
  getBalance,
  activateUser
})

export default userServices
export { addUser }
