import makeAddProduct from "./add-products";
import makeFindProduct from "./find-product";
import makeGetProducts from "./get-products";
import makeFindProducts from "./find-products";
import makeGetProductsPerCategory from "./get-products-per-category";
import { productModel } from "../../models";
import { now } from "../../helpers";
const addProduct = makeAddProduct({ productModel, now });
const findProduct = makeFindProduct({ productModel });
const getProducts = makeGetProducts({ productModel });
const findProducts = makeFindProducts({ productModel });
const getProductsPerCategory = makeGetProductsPerCategory({ productModel });
const productServices = Object.freeze({
  addProduct,
  findProduct,
  getProducts,
  findProducts,
  getProductsPerCategory
});

export default productServices;
