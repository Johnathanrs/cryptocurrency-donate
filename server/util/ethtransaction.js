var ethereumjs = require('ethereumjs-wallet');
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

let web3 = null;

function initWeb3() {
    if (web3 == null) {
        web3 = new Web3();
        let providerUrl = 'https://ropsten.infura.io/v3/2e2c0cd2784f400e853eff507cbbb469';
        if (process.env.ETHNET == 'mainnet') {
            providerUrl = 'https://mainnet.infura.io/v3/2e2c0cd2784f400e853eff507cbbb469';
        }

        web3.setProvider(new Web3.providers.HttpProvider(providerUrl));
    } 
    return web3;
}
export function createUserEthereumAddress() {
    var wallet = ethereumjs.generate();
    return {
        publicKey: wallet.getAddressString(),
        privateKey: wallet.getPrivateKeyString(),
    };
}

export function getBalance(addr) {
    return initWeb3().eth.getBalance(addr).then(balance => {
        return Number(web3.utils.fromWei(balance));
    });
}

export function sendTransaction(from, privateKey, to, amount) {
    web3 = initWeb3();
    const parameter = {
        from: from,
        to: to,
        value: web3.utils.toWei(amount+'', 'ether')
    };

    return new Promise((resolve, reject)=>{
        let confirms = 0;
        let txHash = '';
        let _gasLimit = 0;
        let _gasPrice = 0;
        web3.eth.estimateGas(parameter)
        .then((gasLimit) => {
            _gasLimit = gasLimit;
            parameter.gasLimit = web3.utils.toHex(gasLimit + 10000);
            return web3.eth.getGasPrice();
        }).then((gasPrice) => {
            _gasPrice = gasPrice*1.5
            ;
            parameter.gasPrice = web3.utils.toHex(gasPrice);
            return web3.eth.getTransactionCount(from);
        }).then((count) => {
            parameter.nonce = count;
            parameter.value = parameter.value - _gasLimit * _gasPrice;
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
