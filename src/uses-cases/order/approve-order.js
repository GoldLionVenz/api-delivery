export default function makeApproveOrder({ now, orderModel }) {
  return async function approveOrder({ admin, orderId } = {}) {
    if (!orderId) {
      throw { message: "Numero de orden requerido" }
    }

    const order = await orderModel.findById(orderId)
    if (!order) {
      throw { message: "Order no encontrada" }
    }
    if (order.status != "pending") {
      throw { message: "Order debe tener status pendiente" }
    }
    await orderModel.updateOne(
      { _id: orderId },
      {
        $set: {
          updatedAt: now,
          status: "approved",
          admin: admin._id
        }
      }
    )
    return {
      message: "Orden Aprobada"
    }
  }
}
