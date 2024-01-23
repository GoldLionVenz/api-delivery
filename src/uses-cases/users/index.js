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
const addUser = makeAddUser({ userModel, encryptPassword: bcrypt })
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
  encryptPassword: bcrypt
})
const getUsers = makeGetUsers({ userModel })
const userServices = Object.freeze({
  addUser,
  loginUser,
  updateUser,
  generateToken,
  editPasswordUser,
  addSubUser,
  getUsers
})

export default userServices
export { addUser }
