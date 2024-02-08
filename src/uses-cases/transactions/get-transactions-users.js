export default function makeGetTransactionsUser({ transactionModel }) {
  return async function getTransactionsUser({ user, ...transactionsInfo }) {
    return await transactionModel.paginate(
      { $or: [{from: user._id}, {to: user._id}]},
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
