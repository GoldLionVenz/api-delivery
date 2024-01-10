export default function makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  getBssAmount
}) {
  return async function createOrder({ user, ...orderInfo } = {}) {
    let cart = await shoppingCartModel.findOneAndUpdate({ user: user._id }, { $set: { items: [] }}).populate("items.product")
    if (!cart) {
      throw { message: "shooping cart not found" }
    }
    cart = await getShoppingCartResponse(cart)
    const itemsOrder = cart.items.map((item) => {
      return {
        quantity: item.quantity,
        product: item.product
      }
    })

    if (orderInfo.payment.type === "bss" || orderInfo.payment.type === "pdv") {
      cart.totalAmount = parseFloat(await getBssAmount(cart.totalAmount))
      orderInfo.currency = "VES"
    } 
    const order = await orderModel.create({
      user: user._id,
      totalAmount: cart.totalAmount,
      products: itemsOrder,
      ...orderInfo
    })
    return {
      order
    }
  }
}
