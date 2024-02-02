export default function makeGetBalance({ getBalanceService }) {
  return async function getBalance({ user } = {}) {
    return await getBalanceService({ address: user.wallet.address })
  }
}
