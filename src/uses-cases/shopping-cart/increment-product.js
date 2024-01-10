export default function makeIncrementProductShoppingCart({
    shoppingCartModel,
    getShoppingCartResponse
  }) {
    return async function incrementProductShoppingCart({ user, ...productInfo } = {}) {
      let cart = await shoppingCartModel.findOne({ user: user._id });
      if (!cart) {
        throw { message: "shooping cart not found" };
      }
      const productFind = cart.items.find(
        item => item._id == productInfo.item
      );
      if (!productFind) {
        throw { message: 'product not found in shopping cart' };
      } else {
        await shoppingCartModel.updateOne(
          { user: user._id, "items._id": productInfo.item },
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
        cart: await getShoppingCartResponse(cart)
      };
    };
  }
  