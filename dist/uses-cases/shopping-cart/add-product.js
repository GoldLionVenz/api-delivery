"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddProductShoppingCart;

function makeAddProductShoppingCart({
  shoppingCartModel,
  productModel,
  getShoppingCartResponse
}) {
  return async function addProductShoppingCart({
    user,
    ...productInfo
  } = {}) {
    let cart = await shoppingCartModel.findOne({
      user: user._id
    });

    if (!cart) {
      cart = await shoppingCartModel.create({
        user: user._id
      });
    }

    const product = await productModel.findOne({
      _id: productInfo.product
    });
    console.log(product);

    if (!product) {
      throw {
        message: 'product not found'
      };
    }

    const productFind = cart.items.find(item => item.product == productInfo.product);

    if (!productFind) {
      cart.items.push({
        product: productInfo.product,
        quantity: productInfo.quantity
      });
      await cart.save();
    } else {
      await shoppingCartModel.updateOne({
        user: user._id,
        "items.product": productInfo.product
      }, {
        $set: {
          "items.$.quantity": productFind.quantity + productInfo.quantity
        }
      });
    }

    cart = await shoppingCartModel.findOne({
      user: user._id
    }).populate("items.product").populate("user");
    return {
      message: "Producto agregado",
      cart: getShoppingCartResponse(cart)
    };
  };
}