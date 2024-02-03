export default function makeAddUser({ userModel, encryptPassword, createWallet }) {
  return async function adduser({ ...userInfo } = {}) {
    if (await userModel.existsEmail(userInfo.email)) {
      throw { message: "email exists" }
    }
    if (await userModel.existsUserName(userInfo.userName)) {
      throw { message: "user name exists" }
    }
    userInfo.password = await encryptPassword.hash(userInfo.password, 8)
    const wallet = await createWallet()
    const user = await userModel.create({
      ...userInfo,
      password: userInfo.password,
      userRoll: "user",
      wallet
    })
    delete user.wallet
    return {
      message: "Okey",
      user
    }
  }
}
