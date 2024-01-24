export default function makeGetOrdersDelivery({ orderModel }) {
  return async function getOrdersDelivery({ user, ...orderInfo } = {}) {
    const filter = {}
    if (orderInfo.status) {
      filter.deliveryStatus = orderInfo.status
    }
    const result = await orderModel.paginate(
      { deliveryUser: user._id, ...filter },
      {
        page: orderInfo.page || 1,
        limit: orderInfo.limit || 50,
        sort: { created_at: "desc" },
        populate: "products.product"
      }
    )
    //.populate("products.product");
    return result
  }
}
