export default function makeFindProduct({ productModel, getBssAmount }) {
  return async function findProduct({ _id } = {}) {
    const dolarPrice = await getBssAmount(1)
    const product = await productModel.findById(_id).popualte("category")

    if (!product) {
      throw { message: "product not found" }
    }
    return {
      priceBss: elem.price * dolarPrice,
      ...product.toObject()
    }
  }
}
