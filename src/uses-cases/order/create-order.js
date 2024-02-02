export default function makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  getBssAmount,
  createTransaction,
  getBalance,
  transactionModel
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
    const orderAmount = cart.totalAmount
    if (orderInfo.tokens) {
      const { balance } = await getBalance({ address: user.wallet.address })
      if (orderInfo.tokens > balance) {
        throw { message: "Balance insuficiente" }
      }
      const transaction = await createTransaction({
        amount: orderInfo.tokens, 
        privateKey: user.wallet.keyPair.privateKey
      })
      cart.totalAmount -= orderInfo.tokens
      const transactionWaves = await transactionModel.create({
        ...transaction,
        tx: transaction.id,
        totalAmount: orderInfo.tokens,
        from: user,
        to: "659ca40470319d7da5a83e49"
      })
      orderInfo.transaction = transactionWaves._id
      if (cart.totalAmount === 0) {
        orderInfo.status = "approved"
        orderInfo.deliveryStatus = "preparing_order"
      }
    }
    const totalAmountUSD = cart.totalAmount
    if (orderInfo.payment.type === "bss" || orderInfo.payment.type === "pdv") {
      cart.totalAmount = parseFloat(await getBssAmount(cart.totalAmount))
      orderInfo.currency = "VES"
    } 
    const order = await orderModel.create({
      user: user._id,
      totalAmountUSD,
      totalAmount: cart.totalAmount,
      products: itemsOrder,
      orderAmount,
      ...orderInfo
    })
    return {
      order
    }
  }
}
