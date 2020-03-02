export default function makeOrderModel({ Schema, Model, plugins }) {
  const orderSchema = new Schema({
    address: { type: String, required: true },
    totalQuantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    shoppingCart: { type: Schema.Types.ObjectId, ref: "ShopingCart" },
    payment: { type: Schema.Types.ObjectId, ref: "Payment" }
  });
  orderSchema.plugin(plugins);
  return Model("Order", orderSchema);
}
