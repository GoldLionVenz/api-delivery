export default function makeDeliveryCompleted({ orderModel, createTransaction, transactionModel}) {
  return async function deliveryCompleted({ orderId } = {}) {
    if (!orderId) {
      throw { message: "Numero de orden requerido" }
    }
    const order = await orderModel.findById(orderId).populate("user")
    if (!order) {
      throw { message: "Order no encontrada" }
    }
    if (order.deliveryStatus != "delivery_on_the_way") {
      throw { message: "Order debe estar en camino para ser completada" }
    }
    await orderModel.updateOne(
      { _id: orderId },
      {
        $set: {
          deliveryStatus: "delivery_completed"
        }
      }
    )
    if (order.orderAmount >= 10) {
      const rewardOrder = order.orderAmount * 0.05
      const transaction = await createTransaction({
        amount: parseInt(rewardOrder> 1 ? rewardOrder : 1),
        recipient: order.user.wallet.address,
        sender: "owner"
      })
      await transactionModel.create({
        ...transaction,
        tx: transaction.id,
        totalAmount: rewardOrder,
        from: "659ca40470319d7da5a83e49",
        to: order.user
      })
    }
    return {
      message: "Orden completada"
    }
  }
}
