export default function makeShoppingCartModel({ Schema, Model }) {
  const shpppingCartSchema = new Schema({
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product"
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ],
    user: { type: Schema.Types.ObjectId, ref: "User" }
  });
  return Model("ShopingCart", shpppingCartSchema);
}
