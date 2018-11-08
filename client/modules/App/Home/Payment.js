import React, { Component } from 'react';
const bitcore = require('bitcore-lib');
const litecore = require('litecore-lib');
import ReactBTCQR from '../components/React-bitcoin-qr/ReactBTCQR';
import EthereumQRPlugin from 'ethereum-qr-code';
import Clipboard from 'react-clipboard.js';
const web3 = require('web3');
import { toast } from 'react-toastify';

import BTC_ROUNDED from '../../../assets/img/BTC_yellow.png';
import ETH_ROUNDED from '../../../assets/img/ETH_color.png';
import LTC_ROUNDED from '../../../assets/img/LTC_yellow.png';
import TICKET_BACKGROUND from '../../../assets/img/Ticket_Black_Clean.png';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ETH: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.coinType != nextProps.coinType) {
            this.drawETHQR(nextProps);
        }
    }

    drawETHQR = (props)  => {
        const { crypto, coinType } = props;
        const qr = new EthereumQRPlugin();
        const sendDetails = {
            to: crypto.ETH.address.publicKey,
            value: web3.utils.toWei(crypto.ETH.amount, 'ether'),
        };

        const configDetials = {
            size: 230,
            selector: '#ethereum-qr-code',
            options: {
                margin: 2,
            },
        };
        
        if (coinType == 'ETH') {
            this.setState({ ...this.state, ETH: true }, () => {
                qr.toCanvas(sendDetails, configDetials);
            })
        } else {
            this.setState({ ...this.state, ETH: false });
        }
    }

    componentDidMount() {
        this.drawETHQR(this.props);
    }

    render() {
        const { email, tickets, coinTypeArray, totalPrice, ticketPrice, coinType, project, handleCoinType, crypto } = this.props;

        let BTC = null;
        let LTC = null;
        if (crypto) {
            BTC = new bitcore.URI({
                address: crypto.BTC.address.publicKey,
                amount: crypto.BTC.amount,
                message: crypto.BTC.message,
            });

            LTC = new litecore.URI({
                address: crypto.LTC.address.publicKey,
                amount: crypto.LTC.amount,
                message: crypto.LTC.message,
            });
        }

        return(
            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane">
                <div className="text-right fb mb-1">{email()}</div>
                <div className="card px-2 card-bg">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-2 px-1 ">
                        <h5 className="fb">SCAN THE TAG BELOW TO PAY</h5>
                        {crypto && coinType == 'BTC' && <a href={BTC.toString()} target="_blank"><ReactBTCQR text={BTC.toString()}></ReactBTCQR></a>}
                        {crypto && coinType == 'LTC' && <a href={LTC.toString()} target="_blank"><ReactBTCQR text={LTC.toString()}></ReactBTCQR></a>}
                        {this.state.ETH && <a><div id="ethereum-qr-code"><canvas height="205" width="205" style={{ width: '200px' }}></canvas></div></a>}
                    </div>

                    <div className="justify-content-center mt-2 pt-1 pb-4 ticket-background" role="alert" style={{ backgroundImage: `url(${TICKET_BACKGROUND})`, height: '70px' }}>
                        <h5 className="card-title text-center fw-500 text-white fs-125 mb-0 mt-1" style={{  paddingTop: '0.1rem' }}><strong className="fs-11 text-white">{tickets}</strong> tickets</h5>
                        <div className="text-center">
                            <span className="card-text mr-1 fs-1 text-white"> {totalPrice[coinType]}</span><img src={coinTypeArray[coinType]} alt={coinType} width="25" height="25" />
                        </div>
                    </div>
                    <div className="pb-3 mt-2 px-2" role="alert">
                        <span className="card-text "><strong>Ticket price:</strong> <span className="fs-11 mr-1">{ticketPrice[coinType]}</span><img src={coinTypeArray[coinType]} alt={coinType} width="20" height="20" /></span>
                        <div className="input-group mb-3">
                            <input type="text" id="clipboard" className="form-control pl-2" value={crypto[coinType].address.publicKey} aria-label="Recipient's username" aria-describedby="basic-addon2"  disabled/>
                            <div className="input-group-append ml-1">
                                <Clipboard onClick={() => toast.warn('Copy to Clipboard')} data-clipboard-text={crypto[coinType].address.publicKey}>
                                    <i className="fa fa-clipboard"></i>
                                </Clipboard>
                            </div>
                        </div>
                        <div>
                            <div>Send the exact amount to this address.</div>
                            <div>You will receive your tickets after payment confirmation viewable in your login area, "Dashboard"</div>
                        </div>
                    </div>
                    <div className="mt-2 plr-30">
                        <span className="fb fs-11 warning-color mb-1" >Only {project.maximumAvailableTickets} out of {project.totalTickets} left</span>
                        <div className="float-right mt-sm-2">

                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-around card-bg btn-group p-0 " role="group" aria-label="Basic example">
                        {/* <a href="#" className="btn btn-info p-2">
                            <img src={ETH_ROUNDED} alt="ETH" width="50" height="50" />
                        </a> */}
                        <div className="btn-group btn-group-toggle mt-0 mb-0" data-toggle="buttons">
                            <label className={coinType == 'BTC' ? 'btn active' : 'btn'} data-toggle="tooltip" title="Bitcoin">
                                <input type="radio" name="options" id="option1"  />
                                <img src={BTC_ROUNDED} alt="BTC" width="50" height="50" 
                                    onClick={handleCoinType} />
                            </label>
                            <label className={coinType == 'ETH' ? 'btn active' : 'btn'} data-toggle="tooltip" title="Ethereum">
                                <input type="radio" name="options" id="option2" />
                                <img src={ETH_ROUNDED}  alt="ETH" width="50" height="50" 
                                    onClick={handleCoinType} />
                            </label>
                            <label className={coinType == 'LTC' ? 'btn active' : 'btn'} data-toggle="tooltip" title="Litecoin">
                                <input type="radio" name="options" id="option3" />
                                <img src={LTC_ROUNDED} alt="LTC" width="50" height="50" onClick={handleCoinType}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Payment;
