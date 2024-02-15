export default function makeGetProducts({ productModel, getBssAmount }) {
  return async function getProducts({ ...productsInfo } = {}) {
    const dolarPrice = await getBssAmount(1)
    let statusFilter = {}
    if (productsInfo.status || productsInfo.status === false) {
      statusFilter = { status: productsInfo.status}
    }
    const result = await productModel.paginate(
      statusFilter,
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
