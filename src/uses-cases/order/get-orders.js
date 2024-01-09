export default function makeGetOrders({ orderModel }) {
  return async function getOrders({ user, ...orderInfo } = {}) {
    const result = await orderModel.paginate(
      { user: user._id },
      {
        page: orderInfo.page,
        limit: orderInfo.limit,
        sort: { created_at: "desc" },
        populate: "products.product"
      }
    )
    //.populate("products.product");
    return result
  }
}
