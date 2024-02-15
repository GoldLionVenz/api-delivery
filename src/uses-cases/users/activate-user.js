export default function makeActivateUser({ userModel }) {
  return async function activateUser({ ...userInfo } = {}) {
    await userModel.updateOne(
      { _id: userInfo._id },
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
