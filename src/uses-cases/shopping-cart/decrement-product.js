export default function makeDecrementProductShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
}) {
  return async function decrementProductShoppingCart({
    user,
    ...productInfo
  } = {}) {
    let cart = await shoppingCartModel.findOne({ user: user._id });
    if (!cart) {
      throw { message: "shooping cart not found" };
    }
    const productFind = cart.items.find(
      item => item._id == productInfo.item
    );
    if (!productFind) {
      throw { message: "product not found in shopping cart" };
    } else {
      if(productFind.quantity>1){
        await shoppingCartModel.updateOne(
          { user: user._id, "items._id": productInfo.item },
          {
            $set: {
              "items.$.quantity": --productFind.quantity
            }
          }
        );
      }else{
        cart.items.pull({ _id: productInfo.item });
        await cart.save();
      }
    }

    cart = await shoppingCartModel
      .findOne({ user: user._id })
      .populate("items.product")
      .populate("user");
    return {
      message: "Producto decrementado",
      cart: await getShoppingCartResponse(cart)
    };
  };
}
