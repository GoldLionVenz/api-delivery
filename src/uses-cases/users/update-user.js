export default function makeUpdateUser({ userModel }) {
  return async function updateUser({ user, ...userInfo } = {}) {
    delete userInfo.email
    delete userInfo.password
    await userModel.updateOne(
      { _id: user._id },
      {
        $set: {
          ...userInfo
        }
      }
    )
    return {
      message: "Perfil actualizado"
    }
  }
}
