export default function makeAddProduct({
    productModel,
    now
 }) {
  return async function addProduct({ ...productInfo } = {}) {

      const product = await productModel.create({
        name: productInfo.name,
        price: productInfo.price,
        image: productInfo.image,
        description: productInfo.description,
        category: productInfo.category,
        updated_at: now(),
        created_at: now()
      });

      return {
        message: "Producto agregado ",
        product
      }
  };
}
