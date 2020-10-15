"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeUpdateUser;

function makeUpdateUser({
  userModel
}) {
  return async function updateUser({
    user,
    ...userInfo
  } = {}) {
    await userModel.updateOne({
      _id: user._id
    }, {
      $set: { ...userInfo
      }
    });
    return {
      message: "Perfil actualizado"
    };
  };
}