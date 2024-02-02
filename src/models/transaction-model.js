export default function makeTransactionModel({ Schema, Model, plugins }) {
  const transactionSchema = new Schema(
    {
      fee: { type: Number },
      amount: { type: Number },
      totalAmount: { type: Number },
      tx: { type: String },
      from: { type: Schema.Types.ObjectId, ref: "User" },
      to: { type: Schema.Types.ObjectId, ref: "User" }
    },
    {
      timestamps: { createdAt: "createdAt" }
    }
  )
  transactionSchema.plugin(plugins)
  let Transaction = Model("Transaction", transactionSchema)
  return Transaction
}
