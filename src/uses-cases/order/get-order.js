export default function makeGetOrder({ orderModel }) {
  return async function getOrder({ ...orderInfo } = {}) {
    const order = await orderModel
      .findById(orderInfo.orderId)
      .populate("products.product")
    return {
      ...order.toObject()
    }
  }
}
