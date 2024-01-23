import makeAddCategory from "./add-category"
import makeGetCategory from "./get-categories"
import { categoryServices } from "../../uses-cases"
const addCategory = makeAddCategory(categoryServices.addCategory)
const getCategory = makeGetCategory(categoryServices.getCategories)
const categoryController = Object.freeze({
  addCategory,
  getCategory
})

export default categoryController
