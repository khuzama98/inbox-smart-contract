const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider())

beforeEach(async () => {
    await web3.eth.getAccounts()
})

describe('deploy contract',()=>{})