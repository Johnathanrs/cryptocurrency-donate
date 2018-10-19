import React, { Component } from 'react';

import BTC_ROUNDED from '../../assets/img/BTC_yellow.png';
import ETH_ROUNDED from '../../assets/img/ETH_color.png';
import LTC_ROUNDED from '../../assets/img/LTC_yellow.png';
import TICKET_BACKGROUND from '../../assets/img/Ticket_Black_Clean.png'

class UserRegister extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { email, tickets, coinTypeArray, totalPrice, coinType, handleChange, handleCheck, goBack, gotoNext, offers_email, terms_cond, project, handleCoinType, isRegistering } = this.props;

        let btnState = email ? 'btn btn-lg bg-dark text-white float-right' : 'btn btn-lg bg-dark text-white float-right disabled';

        return (
            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane">
                <div className="card plr-30 card-bg">
                    <div className="justify-content-center pt-4 pb-4 ticket-background" role="alert" style={{backgroundImage: `url(${TICKET_BACKGROUND})` }}>
                        <h5 className="card-title text-center fw-500 text-white fs-125 mb-0 mt-1"><div>You have selected</div> <strong className="fs-11 text-white">{tickets}</strong> tickets</h5>
                        <div className="text-center">
                            <span className="card-text mr-1 fs-1 text-white"> {totalPrice[coinType]}</span><img src={coinTypeArray[coinType]} alt="BTC" width="30" height="30" />
                        </div>
                    </div>

                    <div className="pb-3 mt-3" role="alert">
                        <input type="email" value={email} onChange={handleChange('email')} className="form-control email" id="last_name" name="last_name" placeholder="Email:" />
                        <div className="card-text black-color">Your personal login credential will be sent to this email</div>
                    </div>

                    <div className="mt-2" role="alert">
                        <div className="card-text black-color">The purchased tickets are immediately available and can be easily transferred as a gift or can be upgraded for free through our referral system</div>
                        <div className="checkbox mt-3">
                            <label className="black-color">
                                <input 
                                    type="checkbox"
                                    checked={terms_cond}
                                    onChange={handleCheck('terms_cond')} />
                                <span className="checkbox-decorator"><span className="check"></span><div className="ripple-container"></div></span> I accept the <a href="#" className="black-color fb">Terms and Conditions</a>
                            </label>
                        </div>   
                        <div className="checkbox">
                            <label className="black-color">
                                <input 
                                    type="checkbox"
                                    checked={offers_email}
                                    onChange={handleCheck('offers_email')} />
                                <span className="checkbox-decorator"><span className="check"></span><div className="ripple-container"></div></span> I agree to receive offers and emails from SmartProjects.tech.
                            </label>
                        </div>   
                    </div>

                    <div className="mt-2 px-1">
                        <span className="fb fs-11 warning-color mb-1" >Only {project.maximumAvailableTickets} out of {project.totalTickets} left</span>
                        { isRegistering && <i className="fa fa-spinner fa-spin fa-3x"></i> }
                        <div className="float-right mt-sm-2">
                        <button onClick={goBack} className="btn btn-lg bg-dark text-white mr-2" >Back</button>
                            <button onClick={gotoNext} className={btnState} >Next</button>
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

export default UserRegister;
