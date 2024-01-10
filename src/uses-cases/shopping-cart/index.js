import makeAddProductShoppingCart from "./add-product";
import makeGetProductShoppingCart from "./get-shopping-cart";
import makeRemoveProductShoppingCart from "./remove-item";
import makeDecrementProductShoppingCart from "./decrement-product";
import makeIncrementProductShoppingCart from "./increment-product";
import makeCleanShoppingCart from "./clean-shopping-cart";
import { shoppingCartModel, productModel } from "../../models";
import { getShoppingCartResponse, getBssAmount } from "../../helpers";
const addProductShoppingCart = makeAddProductShoppingCart({
  shoppingCartModel,
  productModel,
  getShoppingCartResponse
});
const getProductShoppingCart = makeGetProductShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse,
  getBssAmount
});
const removeProductShoppingCart = makeRemoveProductShoppingCart ({
  shoppingCartModel,
  getShoppingCartResponse
});
const decrementProductShoppingCart = makeDecrementProductShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
});
const incrementProductShoppingCart = makeIncrementProductShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
});
const cleanShoppingCart = makeCleanShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
});
const shoppingCartServices = Object.freeze({
  addProductShoppingCart,
  getProductShoppingCart,
  removeProductShoppingCart,
  decrementProductShoppingCart,
  incrementProductShoppingCart,
  cleanShoppingCart
});

export default shoppingCartServices;
