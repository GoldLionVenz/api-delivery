import makeAddProductShoppingCart from "./add-product";
import makeGetProductShoppingCart from "./get-shopping-cart";
import makeRemoveProductShoppingCart from "./remove-item";
import makeDecrementProductShoppingCart from "./decrement-product";
import makeIncrementProductShoppingCart from "./increment-product";
import { shoppingCartModel, productModel } from "../../models";
import { getShoppingCartResponse } from "../../helpers";
const addProductShoppingCart = makeAddProductShoppingCart({
  shoppingCartModel,
  productModel,
  getShoppingCartResponse
});
const getProductShoppingCart = makeGetProductShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
});
const removeProductShoppingCart = makeRemoveProductShoppingCart ({
  shoppingCartModel,
  getShoppingCartResponse
});
const decrementProductShoppingCart = makeDecrementProductShoppingCart({
  shoppingCartModel,
  productModel,
  getShoppingCartResponse
});
const incrementProductShoppingCart = makeIncrementProductShoppingCart({
  shoppingCartModel,
  productModel,
  getShoppingCartResponse
});
const shoppingCartServices = Object.freeze({
  addProductShoppingCart,
  getProductShoppingCart,
  removeProductShoppingCart,
  decrementProductShoppingCart,
  incrementProductShoppingCart
});

export default shoppingCartServices;
