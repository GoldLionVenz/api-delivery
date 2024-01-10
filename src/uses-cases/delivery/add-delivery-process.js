export default function makeAddDeliveryProcess({ orderModel }) {
  return async function addDeliveryProcess({ deliveryUser, orderId } = {}) {
    if (!orderId) {
      throw { message: "Numero de orden requerido" }
    }

    const order = await orderModel.findById(orderId)
    if (!order) {
      throw { message: "Order no encontrada" }
    }
    if (order.status != "approved") {
      throw { message: "Order debe tener status aprobado" }
    }
    await orderModel.updateOne(
      { _id: orderId },
      {
        $set: {
          deliveryStatus: "assigned_delivery_user",
          deliveryUser
        }
      }
    )
    return {
      message: "Orden Aprobada"
    }
  }
}
