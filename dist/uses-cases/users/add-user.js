"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddUser;

function makeAddUser({
  userModel,
  encryptPassword
}) {
  return async function adduser({ ...userInfo
  } = {}) {
    if (await userModel.existsEmail(userInfo.email)) {
      throw {
        message: "email exists"
      };
    }

    if (await userModel.existsUserName(userInfo.userName)) {
      throw {
        message: "user name exists"
      };
    }

    userInfo.password = await encryptPassword.hash(userInfo.password, 8);
    const user = await userModel.create({
      name: userInfo.name,
      userName: userInfo.userName,
      email: userInfo.email,
      document: userInfo.document,
      password: userInfo.password,
      phoneNumber: userInfo.phoneNumber,
      address: userInfo.address,
      userRoll: "user"
    });
    return {
      message: "Okey",
      user
    };
  };
}