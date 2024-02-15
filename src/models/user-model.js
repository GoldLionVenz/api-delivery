export default function makeUserModel({ Schema, Model, plugins, encryptPassword }) {
  const UserSchema = new Schema(
    {
      name: { type: String, required: true },
      lastName: { type: String, required: true },
      userName: { type: String, required: true, unique: true, },
      email: { type: String, required: true, unique: true, lowercase: true },
      document: { type: String, required: true },
      password: { type: String, required: true, minLength: 7 },
      phoneNumber: { type: String, required: true },
      address: { type: String, required: true },
      userRoll: { type: String, required: true },
      status: { type: Boolean, default: true },
      token: { type: Object },
      wallet: { type: Object }
    },
    {
      timestamps: { createdAt: "createdAt" }
    }
  )
  UserSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    let user = await User.findOne({ email }).select("-wallet")
    if (!user) {
      throw { message: "Invalid login credentials" }
    }
    const isPasswordMatch = await encryptPassword.compare(password, user.password)
    if (!isPasswordMatch) {
      throw { message: "Invalid login credentials" }
    }
    user = user.toObject()
    delete user.password
    return user
  }
  UserSchema.statics.existsEmail = async (email) => {
    const user = await User.findOne({ email })
    if (user) return true
    else return false
  }
  UserSchema.statics.existsUserName = async (userName) => {
    const user = await User.findOne({ userName: userName })
    if (user) return true
    else return false
  }
  UserSchema.statics.getUsers = async ({ page, limit, ...usersInfo }) => {
    console.log(usersInfo)
    let pageToSearch = parseInt(page || 1)
    let paginate = parseInt(limit || 50)
    let filter = {}
    let filterQuery = {}
    if (usersInfo.query) {
      filterQuery = {
        $or: [
          { lastName: { $regex: usersInfo.query, $options: "i" } },
          { name: { $regex: usersInfo.query, $options: "i" } }
        ]
      }
    }
    if (usersInfo.roll) {
      filter.userRoll = usersInfo.roll
    }
    if (usersInfo.status) {
      filter.status = (/true/).test(usersInfo.status)
    }
    let users = await User.aggregate([
      {
        $match: {
          ...filter,
          ...filterQuery
        }
      },
      {
        $project: {
          password: 0,
          wallet: 0
        }
      },
      {
        $facet: {
          docs: [
            { $sort: { _id: -1 } },
            { $skip: (pageToSearch - 1) * paginate },
            { $limit: paginate }
          ],
          pageInfo: [{ $group: { _id: null, count: { $sum: 1 } } }]
        }
      }
    ])

    let total = 0
    let docs = []
    if (users.length > 0 && users[0].docs.length > 0) {
      docs = users[0].docs
      total = users[0].pageInfo[0].count
    }
    return {
      docs,
      totalDocs: total,
      limit: paginate,
      page: pageToSearch
    }
  }
  UserSchema.plugin(plugins)
  const User = Model("User", UserSchema)
  return User
}
