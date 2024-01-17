import makeAddProduct from "./add-products"
import makeFindProduct from "./find-product"
import makeGetProducts from "./get-products"
import makeFindProducts from "./find-products"
import makeGetProductsPerCategory from "./get-products-per-category"
import makeGetCategories from "./get-categories"
import { productModel } from "../../models"
import { now, getBssAmount, bufferToStream, DriveService } from "../../helpers"
import makeAddFileProductAndImg from "./add-product-and-img"
const addProduct = makeAddProduct({ productModel, now })
const findProduct = makeFindProduct({ productModel, getBssAmount })
const getProducts = makeGetProducts({ productModel, getBssAmount })
const findProducts = makeFindProducts({ productModel, getBssAmount })
const getProductsPerCategory = makeGetProductsPerCategory({ productModel, getBssAmount })
const getCategories = makeGetCategories()
const addFileProductAndImg = makeAddFileProductAndImg({
  productModel,
  bufferToStream,
  DriveService
})
const productServices = Object.freeze({
  addProduct,
  findProduct,
  getProducts,
  findProducts,
  getProductsPerCategory,
  getCategories,
  addFileProductAndImg
})

export default productServices
