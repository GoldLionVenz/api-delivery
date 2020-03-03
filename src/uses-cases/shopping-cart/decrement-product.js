export default function makeDecrementProductShoppingCart({
  shoppingCartModel,
  productModel,
  getShoppingCartResponse
}) {
  return async function decrementProductShoppingCart({
    user,
    ...productInfo
  } = {}) {
    let cart = await shoppingCartModel.findOne({ user: user._id });
    if (!cart) {
      cart = await shoppingCartModel.create({
        user: user._id
      });
    }
    const product = await productModel.findOne({ _id: productInfo.product });
    if (!product) {
      throw { message: "product not found" };
    }

    const productFind = cart.items.find(
      item => item.product == productInfo.product
    );
    if (!productFind) {
      throw { message: "product not found in shopping cart" };
    } else {
      await shoppingCartModel.updateOne(
        { user: user._id, "items.product": productInfo.product },
        {
          $set: {
            "items.$.quantity": ++productFind.quantity
          }
        }
      );
    }

    cart = await shoppingCartModel
      .findOne({ user: user._id })
      .populate("items.product")
      .populate("user");
    return {
      message: "Producto incrementado",
      cart: getShoppingCartResponse(cart)
    };
  };
}
