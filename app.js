const Web3 = require("web3") 
const EthereumTransaction = require("ethereumjs-tx").Transaction;
const url = 'https://mainnet.infura.io/v3/53d47eaecef34962baf08306a5e7d83d';
const ganacheUrl = 'http://127.0.0.1:7545';
const web3 = new Web3(ganacheUrl);

web3.eth.getTransactionCount('0xB109341DFF0D209180c19fb1f6c7fa72beE3697c').then(console.log)

// const sendingAddress = '0xA4Ea307153f67b70E5ab376FBc1116fCd270f4A4';
// const receivingAddress = '0x01e15508B2d96A447d1089AB0b51cAEA7717447b';

// const rawTransaction = { 
//   nonce: 0, 
//   to: receivingAddress,
//   gasPrice: 20000000,
//   gasLimit: 30000,
//   value: 25000000000000000000,
//   data: ''
// };

// web3.eth.getBalance(sendingAddress).then(console.log) 
// web3.eth.getBalance(receivingAddress).then(console.log)

// const privateKeySender = '';
// const privateKeySenderHex = new Buffer.from(privateKeySender, 'hex') 
// const transaction = new EthereumTransaction(rawTransaction) 
// transaction.sign(privateKeySenderHex)

// const serializedTransaction = transaction.serialize(); 
// web3.eth.sendSignedTransaction(serializedTransaction);

