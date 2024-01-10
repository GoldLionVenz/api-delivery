import getBssAmount from "./get-bss-amount"
export default async function getShoppingCartResponse(cart) {
  const dolarPrice = await getBssAmount(1)
  let totalAmount = 0
  let totalItems = 0
  cart.items.forEach((item) => {
    totalItems += item.quantity
    totalAmount += item.quantity * item.product.price
  })
  return {
    items: cart.items.map((elem) => {
      return {
        ...elem.toObject(),
        product: {
          ...elem.product.toObject(),
          priceBss: dolarPrice * elem.product.price
        }
      }
    }),
    totalAmountBss: dolarPrice * totalAmount,
    totalAmount,
    totalItems
  }
}
