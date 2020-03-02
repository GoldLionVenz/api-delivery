export default function makePaymentModel({ Schema, Model, plugins }) {
  const paymentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    date: { type: String, required: true },
    paymentType: { type: String, required: true }
  });
  paymentSchema.plugin(plugins);
  return Model("Payment", paymentSchema);
}
