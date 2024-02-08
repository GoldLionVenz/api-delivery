export default function makeGetProducts({ productModel, getBssAmount }) {
  return async function getProducts({ ...productsInfo } = {}) {
    const dolarPrice = await getBssAmount(1)
    const result = await productModel.paginate(
      {},
      {
        page: productsInfo.page || 1,
        limit: productsInfo.limit || 10,
        sort: { created_at: "desc" },
        populate: "category"
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
