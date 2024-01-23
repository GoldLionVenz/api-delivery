export default function makeGetOrdersAdmin({ orderModel }) {
  return async function getOrdersAdmin({ ...orderInfo } = {}) {
    const result = await orderModel.paginate(
      {},
      {
        page: orderInfo.page || 1,
        limit: orderInfo.limit || 10,
        sort: { created_at: "desc" },
        populate: [
          {
            path: "user",
            select: "-password"
          },
          {
            path: "products.product"
          }
        ]
      }
    )
    //.populate("products.product");
    return result
  }
}
