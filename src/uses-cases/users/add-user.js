export default function makeAddUser({ userModel, encryptPassword }) {
  return async function adduser({ ...userInfo } = {}) {
    if (await userModel.existsEmail(userInfo.email)) {
      throw { message: "email exists" };
    }
    if( await userModel.existsUserName(userInfo.userName)){
      throw { message: "user name exists" };
    }
    
    userInfo.password = await encryptPassword.hash(userInfo.password, 8);
    const user = await userModel.create({
      ...userInfo,
      password: userInfo.password,
      userRoll: "user"
    });

    return {
      message: "Okey",
      user
    };
  };
}
