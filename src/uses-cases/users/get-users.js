export default function makeGetUsers({ userModel }) {
  return async function getUsers({ ...usersInfo } = {}) {
    let filter = {}
    if (usersInfo.query) {
      filter.$or = [
        { phone: { $regex: usersInfo.query, $options: "i" } },
        { document: { $regex: usersInfo.query, $options: "i" } },
        { email: { $regex: usersInfo.query, $options: "i" } }
      ]
    }
    if (usersInfo.roll) {
      filter.userRoll = usersInfo.roll
    }
    const result = await userModel.paginate(filter, {
      page: usersInfo.page || 1,
      limit: usersInfo.limit || 50,
      sort: { createdAt: "desc" },
      select: "-password"
    })
    return result
  }
}
