import React from 'react';
import moment from 'moment';
const bitcore = require('bitcore-lib');
const litecore = require('litecore-lib');
const web3 = require('web3');
import EtherumQRCode from './EthereumQRCode';
import ReactBTCQR from '../modules/App/components/React-bitcoin-qr/ReactBTCQR';

export function getDurationInDays(duration) {
    const a = moment(duration, 'YYYY-MM-DD');
    const b = moment().format('YYYY-MM-DD');
    return a.diff(b, 'days');
}

export function toReadableDate(date) {
    return moment(date).format('MMM DD, YYYY');
}

export function getEmail() {
    const tokenData = window.localStorage.getItem('smartproject');
    let email = '';
    try {
      email = JSON.parse(tokenData).email
    } catch(err) {
      console.log(err);
    }
    return email;
}

export function btcQRCode(address, amount, message) {
    const BTC = new bitcore.URI({
        address,
        amount,
        message,
    });
    return <ReactBTCQR text={BTC.toString()}></ReactBTCQR>;
}

export function ltcQRCode(address, amount, message) {
    const LTC = new litecore.URI({
        address,
        amount,
        message,
    });
    return <ReactBTCQR text={LTC.toString()}></ReactBTCQR>;
}

export function ethQRCode(address, amount) {
    return <EtherumQRCode value={web3.utils.toWei(parseFloat(amount).toFixed(10), 'ether')} gas={1300} to={address} />;
}
