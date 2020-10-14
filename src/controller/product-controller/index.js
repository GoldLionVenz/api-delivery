import makeAddProduct from "./add-product";
import makeFindProduct from "./find-product";
import makeGetProducts from "./get-products";
import makeFindProducts from "./find-products";
import makeGetProductsPerCategory from "./get-products-per-category";
import { productServices } from "../../uses-cases";

const addProduct = makeAddProduct(productServices.addProduct);
const findProduct = makeFindProduct(productServices.findProduct);
const getProducts = makeGetProducts(productServices.getProducts);
const findProducts = makeFindProducts(productServices.findProducts);
const getProductsPerCategory = makeGetProductsPerCategory(productServices.getProductsPerCategory);
const productController = {
  addProduct,
  findProduct,
  getProducts,
  findProducts,
  getProductsPerCategory
};
export default productController;
