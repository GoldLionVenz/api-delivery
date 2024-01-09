export default function makeGetOrder({ orderModel }) {
  return async function getOrder({ orderId } = {}) {
    const order = await orderModel
      .findById(orderId)
      .populate("products.product")
    return {
      ...order.toObject()
    }
  }
}
