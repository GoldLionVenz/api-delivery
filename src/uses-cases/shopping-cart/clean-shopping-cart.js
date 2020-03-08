export default function makeCleanShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
}) {
  return async function cleanShoppingCart({ user } = {}) {
    let cart = await shoppingCartModel.findOne({ user: user._id });
    if (!cart) {
      throw { message: "shooping cart not found" };
    }
    await shoppingCartModel.updateOne(
      { user: user._id },
      {
        $set: {
          items: []
        }
      }
    );

    cart = await shoppingCartModel
      .findOne({ user: user._id })
      .populate("items")
      .populate("user");
    return {
      message: "Carrito limpio",
      cart: getShoppingCartResponse(cart)
    };
  };
}
