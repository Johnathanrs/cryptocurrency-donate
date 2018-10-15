import React, { Component } from 'react';

import Slider from '@material-ui/lab/Slider';

import BTC_ROUNDED from '../../assets/img/BTC_yellow.png';
import ETH_ROUNDED from '../../assets/img/ETH_color.png';
import LTC_ROUNDED from '../../assets/img/LTC_yellow.png';
import TICKET_BACKGROUND from '../../assets/img/Ticket_Black_Clean.png';

class TicketControl extends React.Component {

    render() {
        const { tickets, totalPrice, ticketPrice, coinTypeArray, coinType, donationShare, donationPower, handlePower, handleCoinType, handleTickets, getNow, project } = this.props;

        let ticketsArray = [];
        if (project.maximumAvailableTicketsPerPerson) {
            ticketsArray = Array.from(new Array(project.maximumAvailableTicketsPerPerson + 1), (x, i) => i)
        }

        const btnState = tickets > 0 ? 'btn btn-lg bg-dark text-white float-right mt-sm-1' : 'btn btn-lg bg-dark text-white disabled float-right mt-sm-1';

        return (
            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane">
                <div className="card plr-30 card-bg">
                <div className="d-flex flex-column justify-content-center pt-4 pb-4 ticket-background" role="alert" style={{backgroundImage: `url(${TICKET_BACKGROUND})` }}>
                        <h5 className="card-title text-center fw-500 text-white fs-125 mb-0 mt-1"><div>You have selected</div> <strong className="fs-11 text-white">{tickets}</strong> tickets</h5>
                        <div className="text-center">
                            <span className="card-text mr-1 fs-1 text-white"> {totalPrice[coinType]}</span><img src={coinTypeArray[coinType]} alt="BTC" width="30" height="30" />
                        </div>
                    </div>

                    <div className="pb-3 mt-2" role="alert">
                        <span className="card-text "><strong>Ticket price:</strong> <span className="fs-11 mr-1">{ticketPrice[coinType]}</span><img src={coinTypeArray[coinType]} alt="BTC" width="20" height="20" /></span>
                        <div className="card-text"><span><strong>Max. amount of tickets per person:</strong> <span className="fs-11">{project.maximumAvailableTicketsPerPerson}</span></span></div>
                        <div className="slider">
                            <Slider className="slider-control" value={tickets} min={0} max={project.maximumAvailableTicketsPerPerson} step={1} aria-labelledby="label" onChange={handleTickets} />
                            <div className="slider-ticks">
                                {ticketsArray.map((i, key) => { return (<div key={key}>{i}</div>); })}
                            </div>
                        </div>
                    </div>

                    <div className="pb-2" role="alert">
                        <div className="card-text fb">Your donation share is 1:{donationShare} and has a power of {donationPower} out of 100</div>
                        <div className="slider">
                            <Slider className="slider-control" value={donationPower} min={0} max={100} step={10} aria-labelledby="label" onChange={handlePower} />
                            <div className="slider-ticks">
                                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((i, key) => { return (<div key={key}>{i}</div>); })}
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 mb-2 px-1">
                        <span className="fb fs-11 warning-color mb-1" >Only {project.maximumAvailableTickets} out of {project.totalTickets} left</span>
                        <button onClick={getNow} className={btnState} >Get Now</button>
                    </div>
                    <div className="card-footer d-flex justify-content-around card-bg btn-group p-0 " role="group" aria-label="Basic example">
                        <div className="btn-group btn-group-toggle mt-0 mb-0" data-toggle="buttons">
                            <label className="btn active" data-toggle="tooltip" title="Bitcoin">
                                <input type="radio" name="options" id="option1" />
                                <img src={BTC_ROUNDED} alt="BTC" width="50" height="50" 
                                    onClick={handleCoinType} />
                            </label>
                            <label className="btn" data-toggle="tooltip" title="Ethereum">
                                <input type="radio" name="options" id="option2" />
                                <img src={ETH_ROUNDED}  alt="ETH" width="50" height="50" 
                                    onClick={handleCoinType} />
                            </label>
                            <label className="btn" data-toggle="tooltip" title="Litecoin">
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

export default TicketControl;
