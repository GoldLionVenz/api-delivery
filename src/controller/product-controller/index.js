import makeAddProduct from "./add-product"
import makeFindProduct from "./find-product"
import makeGetProducts from "./get-products"
import makeFindProducts from "./find-products"
import makeGetProductsPerCategory from "./get-products-per-category"
import makeGetCategories from "./get-categories"
import { productServices } from "../../uses-cases"
import makeAddProductAndImg from "./add-product-and-img"

const addProduct = makeAddProduct(productServices.addProduct)
const findProduct = makeFindProduct(productServices.findProduct)
const getProducts = makeGetProducts(productServices.getProducts)
const findProducts = makeFindProducts(productServices.findProducts)
const getProductsPerCategory = makeGetProductsPerCategory(productServices.getProductsPerCategory)
const getCategories = makeGetCategories(productServices.getCategories)
const addProductAndImg = makeAddProductAndImg(productServices.addFileProductAndImg)
const productController = {
  addProduct,
  findProduct,
  getProducts,
  findProducts,
  getProductsPerCategory,
  getCategories,
  addProductAndImg
}
export default productController
