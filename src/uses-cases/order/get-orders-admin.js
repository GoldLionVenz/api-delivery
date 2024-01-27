export default function makeGetOrdersAdmin({ orderModel }) {
  return async function getOrdersAdmin({ ...orderInfo } = {}) {
    const result = await orderModel.getOrders({ ...orderInfo })
    //.populate("products.product");
    return result
  }
}
