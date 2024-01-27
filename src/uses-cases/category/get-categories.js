export default function makeGetCategories({ categoryModel }) {
  return async function getCategories({ ...categoriesInfo }) {
    let filter = {}
    if (categoriesInfo.status) {
      filter.status = categoriesInfo.status
    }
    if (categoriesInfo.query) {
      filter.name = { $regex: categoriesInfo.query, $options: "i" }
    }
    return await categoryModel.find(filter)
  }
}
