export default function makeAddCategory({ categoryModel }) {
  return async function addCategory({ ...categoriesInfo } = {}) {
    if (!Array.isArray(categoriesInfo.categories)) {
      throw { message: "Las categorias debe ser array" }
    }
    const query = []
    for (const category of categoriesInfo.categories) {
      if (category._id) {
        query.push({
          updateOne: {
            filter: { _id: category._id },
            update: {
              ...category
            }
          }
        })
      } else {
        query.push({
          insertOne: {
            document: {
              ...category
            }
          }
        })
      }
    }

    await categoryModel.bulkWrite(query)
    return {
      message: "Okey"
    }
  }
}
