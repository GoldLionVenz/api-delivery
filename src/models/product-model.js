export default function makeProductModel({ Schema, Model, plugins }) {
  const productSchema = new Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String, required: true }
    },
    {
      timestamps: { createdAt: "createdAt" }
    }
  )
  productSchema.plugin(plugins)
  return Model("Product", productSchema)
}
