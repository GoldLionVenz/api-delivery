import makeGetTransactionsAdmin from "./get-transactions-admin"
import makeGetTransactionsUser from "./get-transactions-users"
import { transactionModel } from "../../models"

const getTransactionsAdmin = makeGetTransactionsAdmin({ transactionModel })
const getTransactionsUser = makeGetTransactionsUser({ transactionModel })

const transactionService = Object.freeze({
  getTransactionsAdmin,
  getTransactionsUser
})

export default transactionService
