export default function makeDeliveryCompleted({ orderModel }) {
  return async function deliveryCompleted({ orderId } = {}) {
    if (!orderId) {
      throw { message: "Numero de orden requerido" }
    }
    const order = await orderModel.findById(orderId)
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
    return {
      message: "Orden completada"
    }
  }
}
