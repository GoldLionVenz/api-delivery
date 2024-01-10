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
      totalAmount: { type: Number, required: true },
      status: { type: String, default: "pending" }
    },
    {
      timestamps: { createdAt: "createdAt" }
    }
  )
  orderSchema.plugin(plugins)
  return Model("Order", orderSchema)
}
