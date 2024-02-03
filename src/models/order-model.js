export default function makeOrderModel({ Schema, Model, plugins }) {
  const orderSchema = new Schema(
    {
      products: {
        type: [
          {
            product: {
              type: Schema.Types.ObjectId,
              ref: "Product"
            },
            quantity: {
              type: Number,
              default: 1
            }
          }
        ],
        required: true
      },
      payment: { type: Object },
      paymentInfo: {
        firstName: { type: String },
        lastName: { type: String },
        phone: { type: String },
        email: { type: String },
        document: { type: String },
        address: { type: String }
      },
      shipping: { type: Object },
      deliveryStatus: { type: String },
      deliveryUser: { type: Schema.Types.ObjectId, ref: "User" },
      user: { type: Schema.Types.ObjectId, ref: "User" },
      totalAmountUSD: { type: Number },
      totalAmount: { type: Number, required: true },
      status: { type: String, default: "pending" },
      transaction: { type: Schema.Types.ObjectId, ref: "Transaction" },
      orderAmount: { type: Number }
    },
    {
      timestamps: { createdAt: "createdAt" }
    }
  )
  orderSchema.statics.getOrders = async ({ page, limit, query, status, deliveryStatus }) => {
    let pageToSearch = parseInt(page || 1)
    let paginate = parseInt(limit || 50)
    let queryMatch = {}
    if (query) {
      queryMatch = {
        $or: [
          { "user.name": { $regex: query, $options: "i" } },
          { "user.lastName": { $regex: query, $options: "i" } },
          { "user.email": { $regex: query, $options: "i" } },
          { "user.document": { $regex: query, $options: "i" } },
          { "deliveryUser.name": { $regex: query, $options: "i" } },
          { "deliveryUser.lastName": { $regex: query, $options: "i" } },
          { "deliveryUser.email": { $regex: query, $options: "i" } },
          { "deliveryUser.document": { $regex: query, $options: "i" } }
        ]
      }
    }
    let statusMatch = {}
    if (status) {
      statusMatch = { status }
    }
    let deliveryMatch = {}
    if (deliveryStatus) {
      deliveryMatch = { deliveryStatus }
    }
    let orders = await Order.aggregate([
      {
        $match: {
          ...statusMatch,
          ...deliveryMatch
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $unwind: {
          path: "$user"
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "deliveryUser",
          foreignField: "_id",
          as: "deliveryUser"
        }
      },
      {
        $unwind: {
          path: "$deliveryUser",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $proyect: {
          "user.wallet": 0,
          "deliveryUser.wallet": 0
        }
      },
      {
        $match: queryMatch
      },
      {
        $unwind: {
          path: "$products"
        }
      },
      {
        $lookup: {
          from: "products",
          localField: "products.product",
          foreignField: "_id",
          as: "products.product"
        }
      },
      {
        $unwind: {
          path: "$products.product"
        }
      },
      {
        $group: {
          _id: "$_id",
          products: {
            $push: "$products"
          },
          doc: {
            $first: "$$ROOT"
          }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              "$doc",
              {
                products: "$products"
              }
            ]
          }
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
    if (orders.length > 0 && orders[0].docs.length > 0) {
      docs = orders[0].docs
      total = orders[0].pageInfo[0].count
    }
    return {
      docs,
      totalDocs: total,
      limit: paginate,
      page: pageToSearch
    }
  }
  orderSchema.plugin(plugins)
  let Order = Model("Order", orderSchema)
  return Order
}
