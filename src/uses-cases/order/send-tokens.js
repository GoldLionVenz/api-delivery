export default function makeSendTokens({ userModel, createTransaction, transactionModel }) {
  return async function sendTokens({ userId, amount } = {}) {
    const user = await userModel.findById(userId)
    const transaction = await createTransaction({
      amount,
      recipient: user.wallet.address,
      sender: "owner"
    })
    await transactionModel.create({
      ...transaction,
      tx: transaction.id,
      totalAmount: amount,
      from: "659ca40470319d7da5a83e49",
      to: userId
    })
    return transaction
  }
}
