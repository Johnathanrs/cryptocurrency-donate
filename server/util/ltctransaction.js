var litecore = require('litecore-lib');
const litecoinjs = require('litecoinjs');
var request = require('request');
var superagent = require('superagent');

var CoinKey = require('coinkey');
var ci = require('coininfo');

var BITCOIN_DIGITS = 8;
var BITCOIN_SAT_MULT = Math.pow(10, BITCOIN_DIGITS);

export function createUserLitecoinAddress() {
	// const newAddress = await generateLTCAddress();
	let address = null;
	if (process.env.LTCNET == 'mainnet') {
		address = CoinKey.createRandom(ci('LTC'));
	} else {
		address = CoinKey.createRandom(ci('LTCTEST'));
	}
	return {
	  publicKey: address.publicAddress,
	  privateKey: address.privateWif,
	};
};

export function getBalance(addr) {
	const network = process.env.LTCNET == 'mainnet' ? 'LTC' : 'LTCTEST';
	return superagent.get(`https://chain.so/api/v2/get_address_balance/${network}/${addr}/3`).send().then(function (res) {
		return parseFloat(res.body.data.confirmed_balance);
	});
}

export function getUTXOs(address, network) {
	let uri = 'https://insight.litecore.io/api/addr/' + address + '/utxo';
	if (network == 'testnet') {
		uri = 'https://testnet.litecore.io/api/addr/' + address + '/utxo';
	}
  return new Promise((resolve, reject) => {
    request({
      uri: uri,
      json: true
    },
      (error, response, body) => {
				if(error) reject(error);
				// if (response.statusCode != 200) reject({ message: 'something is wrong'});
        resolve(body)
      }
    )
  })
}

//manually hit an insight api to broadcast your tx
export  function broadcastTX(rawtx, network) {
	
}

 export function sendTransaction(utxos, to, amount, fee, privateKeyWIF) {
		let uri = 'https://insight.litecore.io/api/tx/send';
		if (process.env.LTCNET == 'testnet') {
			uri = 'https://testnet.litecore.io/api/tx/send';
		}
		return new Promise((resolve, reject) => {
			var rawtx = null;
			try {
				rawtx = new litecore.Transaction() //use litecore-lib to create a transaction
				.from(utxos)
				.to(to, amount) //note: you are sending all your balance AKA sweeping
				.fee(fee)
				.sign(privateKeyWIF)
				.serialize();
			} catch(err) {
				reject(err);
			}
			request.post({url: uri, form: {rawtx: rawtx}}, (err, response, body) => {
				if (err) reject(err);
				// if (response.statusCode != 200) reject({ message: 'something is wrong'});
				if (body.txid) {
					resolve(body.txid);
				} else {
					reject(body);
				} 
			});
		}).catch(err => { return err;});
 }