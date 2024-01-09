export default function makeAddProduct({
    productModel,
    now
 }) {
  return async function addProduct({ ...productInfo } = {}) {
      const query = []
      for (const product of productInfo.products) {
        if (product._id) {
          query.push({
            updateOne: {
              filter: { _id: product._id },
              update: {
                ...product
              }
            }
          })
        } else {
          query.push({
            insertOne: {
              document: {
                ...product
              }
            }
          })
        }
      }
      await productModel.bulkWrite(query)
      return {
        message: "Productos agregados"
      }
  };
}
