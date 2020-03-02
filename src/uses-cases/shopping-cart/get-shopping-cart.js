export default function makeGetProductShoppingCart({ shoppingCartModel }) {
  return async function getShoppingCart({ user } = {}) {
    const cart = await shoppingCartModel
      .findOne({ user: user._id })
      .populate("items.product");
    if (!cart) {
      throw { message: "shooping cart not found" };
    }
    return cart;
  };
}
