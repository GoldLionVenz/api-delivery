export default function makeGetTransactionsAdmin({ transactionModel }) {
    return async function getTransactionsAdmin({ ...transactionsInfo }) {
      return await transactionModel.paginate(
        {},
        {
          page: transactionsInfo.page || 1,
          limit: transactionsInfo.limit || 10,
          sort: { created_at: "desc" },
          populate: [
            {
              path: "from",
              select: "-password -wallet"
            },
            {
              path: "to",
              select: "-password -wallet"
            }
          ]
        }
      )
    }
  }
  