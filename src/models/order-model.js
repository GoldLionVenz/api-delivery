export default function makeOrderModel({ Schema, Model, plugins }) {
  const orderSchema = new Schema({
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
    shipping: { type: Object, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    updated_at: { type: String, required: true },
    created_at: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true },
    ref: { type: String, required: true }
  });
  orderSchema.plugin(plugins);
  return Model("Order", orderSchema);
}
