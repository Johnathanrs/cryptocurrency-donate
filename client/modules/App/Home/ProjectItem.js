import React from 'react';

import moment from 'moment';
import TICKET_BACKGROUND from '../../../assets/img/Ticket_Black_Clean.png';

import '../../../assets/css/cards_gallery.css';

function ProjectItem(props) {
    console.log(props)
    const { project, gotoHome } = props;
    let a = moment(project.fundingDuration, 'YYYY-MM-DD');
    let b = moment().format('YYYY-MM-DD');
    var daysLeft = a.diff(b, 'days');
    const thumbnail = 'http://' +  window.location.host + '/' + project.projectThumbnail;
    return (
        <div className="col-md-6 col-lg-4 black-color mb-2">
            <div className="card border-0 transform-on-hover">
                <div className="card-img-container">
                    <a href="#" onClick={() => gotoHome(project._id)}>
                        <img className="card-img-top" src={thumbnail} alt={project.title} />
                    </a>
                    <a href="#" className="btn btn-info btn-link top-left bg-dard" data-toggle="tooltip" title="Location">
                        <span className="align-middle">{project.address && project.address.city}</span>
                        <i className="fa fa-map-marker fa-2x align-middle warning-color" aria-hidden="true"></i>
                    </a>
                    <div className="bottom-left bg-dark px-1">
                        <span>$&nbsp;{project.totalMoneyInUSD}</span>&nbsp;&nbsp;<i className="fa fa-btc text-white" aria-hidden="true"></i>&nbsp;<span>{project.totalMoneyInBTC}</span>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-left">
                        <span>Tickets From ${project.ticketPriceInUSD}</span><span className="float-right">{daysLeft} Days Left</span>
                    </div>
                    <h3 className="fb text-center">{project.title}</h3>
                    <div className="d-flex" role="alert" >
                        <a className="btn btn-info btn-link text-white gallery-ticket-background px-3" onClick={() => gotoHome(project._id)} style={{ backgroundImage: `url(${TICKET_BACKGROUND})`, paddingTop: '19px' }}>
                            <div className="">BUY TICKETS</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
