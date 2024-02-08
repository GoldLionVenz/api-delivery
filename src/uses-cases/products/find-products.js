export default function makeFindProducts({ productModel, getBssAmount }) {
  return async function findProducts({ ...productsInfo } = {}) {
    const dolarPrice = await getBssAmount(1)
    const result = await productModel.paginate(
      {
        $or: [
          { name: { $regex: productsInfo.query, $options: "i" } },
          { description: { $regex: productsInfo.query, $options: "i" } }
        ]
      },
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
