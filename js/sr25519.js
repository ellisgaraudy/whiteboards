

(async () => {
    const BN = require('bn.js')
    const { keccak256 } = require('js-sha3')
    const { ec: EC } = require('elliptic')
    const { base58 } = require('@scure/base')
    const secp = require("@noble/secp256k1")

    const message = await secp.utils.sha256("blody dah")
    console.log("schnorr's scheme >>>>>")
    const privateKey = secp.utils.randomPrivateKey()
    const pubKey = secp.schnorr.getPublicKey(privateKey)
    const pKey = secp.utils.bytesToHex(privateKey)
    const address = base58.encode(pubKey)
    const pkeyBN = new BN(pKey, 16)
    const pubKey2 = secp.schnorr.getPublicKey(privateKey)
    const rsignature = await secp.schnorr.sign(message, privateKey)
    const risValid = await secp.schnorr.verify(rsignature, message, pubKey2)
    console.log("Signature:  ", rsignature)
    console.log("Verify: ", risValid)
    console.log("Pub Key", pubKey)
    console.log("Pub Key 2", pubKey2)
    console.log( pKey)
    console.log('5'+ address)
    console.log(pkeyBN)
    console.log(pkeyBN.toString('hex'))
    console.log("ecdsa scheme >>>>>")
    const ec = new EC('secp256k1')
    const key = ec.keyFromPrivate(address)
    console.log(key.getPrivate())

})()

// (async () => {
//     const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api')
//
//     const wsProvider = new WsProvider('wss://rpc.polkadot.io')
//     const api = await ApiPromise.create({ provider: wsProvider})
//
//     const keyring = new Keyring({type: 'sr25519'})
//
//     console.log(api.genesisHash.toHex())
// })()



