const crypto = require('crypto')

const CLIENT_ID = '3253ccd4d25ee573'
const API_SECRET = '0e621e261ef76828990744ed50b47acfc1fe279d5c2ca63a57d3c8cf3e5f1873'

function createHeader(clientId, secret) {
    const hSec = crypto.createHmac('sha256', secret).digest('base64')
    const hSec2 = crypto.createHmac('sha256', secret).digest('hex') 
    console.log(hSec)
    console.log(hSec2)
    const keyString = Buffer.from(`${clientId}:${hSec}`, 'utf8').toString('hex')
    console.log("Create Key String >> ",keyString)
    const decKeyString = Buffer.from(keyString, 'hex').toString('utf8')
    console.log("Read Key String >>  ", decKeyString);
    console.log(Buffer.from(hSec, 'base64').toString('hex'));
    const keySplit = decKeyString.split(':');
    console.log(keySplit)
}   



createHeader(CLIENT_ID, API_SECRET)