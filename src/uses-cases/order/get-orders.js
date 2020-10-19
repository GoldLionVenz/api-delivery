export default function makeGetOrders({ orderModel }) {
  return async function getOrders({ user, ...orderInfo } = {}) {
      console.log(user)
    const result = await orderModel
      .paginate(
        {user:user._id, status:"approved"},
        {
          page: orderInfo.page,
          limit: orderInfo.limit,
          sort: { created_at: "desc" },
          populate: 'products.product'
        }
      )
      //.populate("products.product");
    return result;
  };
}
