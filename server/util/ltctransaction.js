var litecore = require('litecore-lib');
const litecoinjs = require('litecoinjs');
var request = require('request');
var superagent = require('superagent');

var BITCOIN_DIGITS = 8;
var BITCOIN_SAT_MULT = Math.pow(10, BITCOIN_DIGITS);

export function createUserLitecoinAddress() {
	var address = null;
	var privateAddress = null;
	try {
	  // var value = Buffer.from('correct horse battery staple');
	  // var hash = bitcore.crypto.Hash.sha256(value);
	  var buffer = new litecore.crypto.Random.getPseudoRandomBuffer(16);
	  var bn = new litecore.crypto.BN.fromBuffer(buffer);
	  var privateKey = new litecore.PrivateKey(bn, process.env.LTCNET); // testnet for test purpose'
	  privateAddress = privateKey.toWIF().toString();
	  address = new litecore.PublicKey(privateKey);
	} catch(err) {
	  console.log(err);
	}
  
	return {
	  publicKey: address.toAddress().toString(),
	  privateKey: privateAddress,
	};
};

export function getBalance(addr, network) {
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
export function broadcastTX(rawtx, network) {
	let uri = 'https://insight.litecore.io/api/tx/send';
	if (network == 'testnet') {
		uri = 'https://testnet.litecore.io/api/tx/send';
	}
  return new Promise((resolve, reject) => {
    request({
      uri: uri,
      method: 'POST',
      json: {
        rawtx,
      }
    },
      (error, response, body) => {
				if(error) reject(error);
				// if (response.statusCode != 200) reject({ message: 'something is wrong'});
        resolve(body.txid);
      }
    );
  });
}

export function sendTransaction(utxos, to, amount, fee, privateKeyWIF) {
	var tx = new litecore.Transaction() //use litecore-lib to create a transaction
						.from(utxos)
						.to(to, amount) //note: you are sending all your balance AKA sweeping
						.fee(fee)
						.sign(privateKeyWIF)
						.serialize();
		
	return broadcastTX(tx, process.env.LTCNET); //broadcast the serialized tx


		// return litecoinjs.newTransaction({
		// 		network: process.env.LTCNET,
		// 		address: privateKeyWIF,
		// 		utxo: utxos,
		// 		output: [{
		// 			 address: to,
		// 			 amount: amount 
		// 		}],
		// 		fee: fee, // transaction fee 
		// });
}

