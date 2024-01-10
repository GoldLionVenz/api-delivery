export default function makeGetOrder({ orderModel, getBssAmount }) {
  return async function getOrder({ orderId } = {}) {
    const dolarPrice = await getBssAmount(1)
    const order = await orderModel.findById(orderId).populate("products.product")
    return {
      ...order.toObject(),
      products: order.products.map((elem) => {
        return {
          ...elem.toObject(),
          product: {
            ...elem.product.toObject(),
            priceBss: dolarPrice * elem.product.price
          }
        }
      })
    }
  }
}
