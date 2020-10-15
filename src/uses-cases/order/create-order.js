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
        status: "in_process"
    });
    const items = order.products.map(product=>{
      return {
        name: product.product.name,
        unit_amount: {
          currency_code:"USD",
          value:`${product.product.price}.00`
        },
        quantity: product.quantity
      }
    })
    return { 
      items,
      orderId:order._id,
      totalAmount: `${order.totalAmount}.00`
     };
  };
}
