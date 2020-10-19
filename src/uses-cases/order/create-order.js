export default function makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  now
}) {
  return async function createOrder({ user, ...orderInfo } = {}) {
    let cart = await shoppingCartModel.findOne({ user: user._id }).populate("items.product");
    if (!cart) {
        throw { message: "shooping cart not found" };
    }
    cart = getShoppingCartResponse(cart)
    const itemsOrder = cart.items.map(item=>{
      return {
        quantity:item.quantity,
        product:item.product
      }
    })
    const order = await orderModel.create({
        user: user._id,
        shipping: orderInfo.shipping,
        updated_at: now(),
        created_at: now(),
        totalAmount: cart.totalAmount,
        products: itemsOrder,
        status: "in_process",
        ref:Math.random()
        .toString(36)
        .replace(/[^a-zA-Z0-9]+/g, "")
        .substring(0, 6).toUpperCase()
    });
    const items = order.products.map(product=>{
      return {
        name: product.product.name,
        unit_amount: {
          currency_code:"USD",
          value:parseFloat(`${product.product.price}`).toFixed(2)
        },
        quantity: product.quantity
      }
    })
    return { 
      items,
      orderId:order._id,
      totalAmount: parseFloat(`${order.totalAmount}`).toFixed(2)
     };
  };
}
