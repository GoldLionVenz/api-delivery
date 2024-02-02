export default function makeCreateWallet({ wavesCrypto }) {
  return async function createWallet() {
    const seed = wavesCrypto.randomSeed() // or input your existing seed
    const sk = wavesCrypto.privateKey(seed)
    const pk = wavesCrypto.publicKey(seed)
    //const address = libs.crypto.address(seed); // address for Mainnet
    const address = process.env.NODE_ENV === "Production" ? wavesCrypto.address(seed) : wavesCrypto.address(seed, "T")

    return {
      phrase: seed,
      address: address,
      keyPair: {
        privateKey: sk,
        publicKey: pk
      }
    }
  }
}
