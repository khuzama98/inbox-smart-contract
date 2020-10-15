const path = require('path');
const fs = require('fs');
const solc = require('solc');

const InboxPath = path.resolve(__dirname,"contracts","Inbox.sol");
console.log(InboxPath)
const source = fs.readFileSync(InboxPath,"utf8");
console.log(source)
// console.log(solc.compile(source))
module.exports = solc.compile(source).contracts[":Inbox"];