export default function makeGetOrdersAdmin({ orderModel }) {
  return async function getOrdersAdmin({ ...orderInfo } = {}) {
    const result = await orderModel.paginate(
      { },
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
