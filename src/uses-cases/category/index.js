import makeAddCategory from "./add-category"
import makeGetCategories from "./get-categories"
import { categoryModel } from "../../models"

const addCategory = makeAddCategory({ categoryModel })
const getCategories = makeGetCategories({ categoryModel })
const categoryServices = Object.freeze({
  addCategory,
  getCategories
})

export default categoryServices
