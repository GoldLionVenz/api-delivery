export default function makeRejectOrder({ orderModel }) {
  return async function rejectOrder({ admin, orderId } = {}) {
    if (!orderId) {
      throw { message: "Numero de orden requerido" }
    }

    const order = await orderModel.findById(orderId)

    if (!order) {
      throw { message: "Orden no encontrada" }
    }

    if (order.status !== "pending") {
      throw { message: "Orden debe tener status pendiente" }
    }
    await orderModel.updateOne(
      { _id: orderId },
      {
        $set: {
          status: "rejected",
          admin: admin._id
        }
      }
    )
    return {
      message: "Orden rechazada"
    }
  }
}
