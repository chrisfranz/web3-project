const Web3 = require('web3');
const url = 'HTTP://127.0.0.1:7545';
const web3 = new Web3(url);

web3.eth.getAccounts().then(accounts => console.log('accounts: ', accounts[0]))