export default function makeGetProducts({ productModel }) {
  return async function getProducts({ ...productsInfo } = {}) {
    const result = await productModel.paginate(
      {},
      {
        page: productsInfo.page,
        limit: productsInfo.limit,
        sort: { created_at: "desc" }
      }
    );
    return result;
  };
}
