import makeGetTransactions from "./get-transactions"
import { transactionService } from "../../uses-cases"

const getTransactionsUser = makeGetTransactions(transactionService.getTransactionsUser)
const getTransactionsAdmin = makeGetTransactions(transactionService.getTransactionsAdmin)

const transactionController = Object.freeze({
  getTransactionsAdmin,
  getTransactionsUser
})

export default transactionController
