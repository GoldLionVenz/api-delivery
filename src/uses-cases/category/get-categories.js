export default function makeGetCategories({ categoryModel }) {
  return async function getCategories({ ...categoriesInfo }) {
    let filter = {}
    if (categoriesInfo.status) {
      filter.status = categoriesInfo.status
    }
    return await categoryModel.find(filter)
  }
}
