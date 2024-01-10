export default function makeGetProductsPerCategory({ productModel, getBssAmount }) {
  return async function getProductsPerCategory({ ...productsInfo } = {}) {
    const dolarPrice = await getBssAmount(1)
    const result = await productModel.paginate(
      {
        category: productsInfo.category
      },
      {
        page: productsInfo.page,
        limit: productsInfo.limit,
        sort: { created_at: "desc" }
      }
    )
    return {
      ...result,
      docs: result.docs.map((elem) => {
        return {
          priceBss: elem.price * dolarPrice,
          ...elem.toObject()
        }
      })
    }
  }
}
