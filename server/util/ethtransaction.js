var ethereumjs = require('ethereumjs-wallet');
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const web3 = new Web3();
let providerUrl = 'https://ropsten.infura.io/v3/2e2c0cd2784f400e853eff507cbbb469';
if (process.env.ETHNET == 'mainnet') {
    providerUrl = 'https://mainnet.infura.io/v3/2e2c0cd2784f400e853eff507cbbb469';
}

web3.setProvider(new Web3.providers.HttpProvider(providerUrl));

export function createUserEthereumAddress() {
    var wallet = ethereumjs.generate();
    return {
        publicKey: wallet.getAddressString(),
        privateKey: wallet.getPrivateKeyString(),
    };
}

export function getBalance(addr) {
    return web3.eth.getBalance(addr).then(balance => {
        return Number(web3.utils.fromWei(balance));
    });
}

export function sendTransaction(from, privateKey, to, amount) {
    const parameter = {
        from: from,
        to: to,
        value: web3.utils.toWei(amount+'', 'ether') 
      };

    return new Promise((resolve, reject)=>{
        let confirms = 0;
        let txHash = '';
        web3.eth.estimateGas(parameter)
        .then((gasLimit) => {
            parameter.gasLimit = web3.utils.toHex(gasLimit + 10000);
            return web3.eth.getGasPrice();
        }).then((gasPrice) => {
            parameter.gasPrice = web3.utils.toHex(gasPrice*1.5);
            return web3.eth.getTransactionCount(from);
        }).then((count) => {
            parameter.nonce = count;
            const transaction = new Tx(parameter);
            transaction.sign(Buffer.from(privateKey.replace('0x', ''), 'hex'));
            web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
            .once('transactionHash', (hash) => {
                txHash = hash;
                console.log('transactionHash https://etherscan.io/tx/' + hash);
            }).once('receipt', (receipt) => {
                console.log('receipt' + JSON.stringify(receipt));
            }).on('confirmation', (confirmationNumber, receipt) => {
                confirms ++;
                console.log(confirms);
                if (confirms > 10)
                    return resolve(txHash);
            }).on('error', reject);
        }).catch(reject);
    });
}
