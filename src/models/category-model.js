export default function makeCategoryModel({ Schema, Model, plugins }) {
  const categorySchema = new Schema(
    {
      name: { type: String, required: true },
      status: { type: Boolean, default: true }
    },
    {
      timestamps: { createdAt: "createdAt" }
    }
  )
  categorySchema.plugin(plugins)
  return Model("Category", categorySchema)
}
