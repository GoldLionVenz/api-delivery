import { normalizeNumber } from "../../helpers"
import { libs, transfer, broadcast } from "@waves/waves-transactions"
import makeCreateWallet from "./create-wallet"
import makeGetBalance from "./get-balance"
import makeValidateAddress from "./validate-address"
import makeCreateTransaction from "./create-transactions"
const createWallet = makeCreateWallet({ wavesCrypto: libs.crypto })
const getBalance = makeGetBalance()
const validateAddress = makeValidateAddress()
const createTransaction = makeCreateTransaction({ transfer, broadcast, normalizeNumber })
const wavesServices = Object.freeze({
  createWallet,
  getBalance,
  validateAddress,
  createTransaction
})

export default wavesServices
