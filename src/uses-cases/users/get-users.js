export default function makeGetUsers({ userModel }) {
  return async function getUsers({ ...usersInfo } = {}) {
    const result = await userModel.getUsers({ ...usersInfo })
    return result
  }
}
