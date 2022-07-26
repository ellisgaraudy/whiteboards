const coinKey = require('coinkey');
var ck = coinKey.createRandom();
var privateKey = ck.privateWif;
var address = ck.publicAddress;


console.log(`Private Key: ${privateKey}`);
console.log(`Address: ${address}`);