import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import PAYMENT_CONFIRMED from '../../../assets/img/payment_confirmed.png';
import BTC_ROUNDED from '../../../assets/img/BTC_yellow.png';
import ETH_ROUNDED from '../../../assets/img/ETH_color.png';
import LTC_ROUNDED from '../../../assets/img/LTC_yellow.png';
import TICKET_BACKGROUND from '../../../assets/img/Ticket_Black_Clean.png';

class Thankyou extends React.Component {

    gotoDashboard = () => {
        browserHistory.push('/user/mytickets');
    }
    
    render() {
        const { email, tickets, coinTypeArray, paidAmount, coinType, project } = this.props;

        return(
            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane">
                <div className="text-right fb mb-1">{email()}</div>
                <div className="card px-3 card-bg">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-3 px-1 fb">
                        <h5 className="fb">THANK YOU!</h5>
                        <img src={PAYMENT_CONFIRMED} width="200" height="200" />
                    </div>
                    <div className="px-1 mb-1">
                            <h5 className="fb text-left">TRANSACTION COMPLETED</h5>
                            <div>An confirmation has sent to you</div>
                        </div>
                    <div className="justify-content-center mt-2 pt-1 pb-4 ticket-background" role="alert" style={{backgroundImage: `url(${TICKET_BACKGROUND})`, height: '70px' }}>
                        <h5 className="card-title text-center fw-500 text-white fs-125 mb-0 mt-1" style={{  paddingTop: '0.1rem' }}><strong className="fs-11 text-white">{tickets}</strong> tickets</h5>
                        <div className="text-center">
                            <span className="card-text mr-1 fs-1 text-white"> {paidAmount[coinType]}</span><img src={coinTypeArray[coinType]} alt="BTC" width="25" height="25" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <span className="fb fs-11 warning-color mb-1" >Only {project.maximumAvailableTickets} out of {project.totalTickets} left</span>
                        <div className="float-right mt-sm-2">
                            <button onClick={this.gotoDashboard} className="btn btn-lg bg-dark text-white" >Goto Dashboard</button>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-around card-bg btn-group p-0 " role="group" aria-label="Basic example">
                        <div className="btn-group btn-group-toggle mt-0 mb-0" data-toggle="buttons">
                            <label className="btn active" data-toggle="tooltip" title="Bitcoin">
                                <input type="radio" name="options" id="option1"  />
                                <img src={BTC_ROUNDED} alt="BTC" width="50" height="50" 
                                    />
                            </label>
                            <label className="btn" data-toggle="tooltip" title="Ethereum">
                                <input type="radio" name="options" id="option2" />
                                <img src={ETH_ROUNDED}  alt="ETH" width="50" height="50" 
                                    />
                            </label>
                            <label className="btn" data-toggle="tooltip" title="Litecoin">
                                <input type="radio" name="options" id="option3" />
                                <img src={LTC_ROUNDED} alt="LTC" width="50" height="50" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Thankyou;
