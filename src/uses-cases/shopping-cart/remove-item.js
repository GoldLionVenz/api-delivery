export default function makeRemoveProductShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
}) {
  return async function removeProductShoppingCart({ user, ...productInfo } = {}) {
    let cart = await shoppingCartModel.findOne({ user: user._id })
    cart.items.pull({ _id: productInfo.item });
    await cart.save();
    cart = await shoppingCartModel
      .findOne({ user: user._id })
      .populate("items.product")
      .populate("user");
    return {
      message: "Producto eliminado",
      cart: await getShoppingCartResponse(cart)
    };
  };
}
