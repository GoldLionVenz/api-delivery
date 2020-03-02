export default function makeAddProductShoppingCart({ shoppingCartModel }) {
  return async function addProductShoppingCart({ user, ...productInfo } = {}) {
    let cart = await shoppingCartModel.findOne({ user: user._id }).populate('items.product').populate('user')
    if (!cart) {
      cart = await shoppingCartModel.create({
        user: user._id
      });
    }
    cart.items.push({
      product: productInfo.product,
      quantity: productInfo.quantity
    });

    cart.save(function (err) {
        if(err){
            throw { message: 'err' };
        }
        console.log('aqui')
    })

    return {
      message: "Producto agregado "
    };
  };
}
