export default function makeDeliveryOnTheWay({ orderModel }) {
  return async function deliveryOnTheWay({ orderId } = {}) {
    if (!orderId) {
      throw { message: "Numero de orden requerido" }
    }
    const order = await orderModel.findById(orderId)
    if (!order) {
      throw { message: "Order no encontrada" }
    }
    if (order.deliveryStatus != "assigned_delivery_user") {
      throw { message: "Order debe estar asignada a un repartidor" }
    }
    await orderModel.updateOne(
      { _id: orderId },
      {
        $set: {
          deliveryStatus: "delivery_on_the_way"
        }
      }
    )
    return {
      message: "Orden en camino"
    }
  }
}
