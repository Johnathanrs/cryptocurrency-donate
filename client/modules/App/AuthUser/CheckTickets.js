import React from 'react';
import { connect } from 'react-redux';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { toast } from 'react-toastify';
import { getDurationInDays, toReadableDate } from '../../../util/util';

import { fetchTickets } from '../AppActions';

class CheckTickets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            showModal: true,
            transferredEmail: ''
        }
    }

    componentWillMount() {
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartproject');
            this.setState({ isUnAuth: !token, token });
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchTickets());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.tickets != nextProps.tickets) {
            const tickets = [];
            nextProps.tickets.map(each => {
                const ticket = {};
                ticket._id = each._id;
                ticket.btcTicketPrice = each.projectID.ticketPriceInBTC;
                ticket.ethTicketPrice = each.projectID.ticketPriceInETH;
                ticket.ltcTIcketPrice = each.projectID.ticketPriceInLTC;
                ticket.ticketPrice = `${ticket.btcTicketPrice}/${ticket.ethTicketPrice}/${ticket.ltcTIcketPrice}`
                ticket.projectID = each.projectID._id;
                ticket.title = each.projectID.title;
                const subProjectInUser = each.userID.subProjects.filter(sub => sub.projectID == each.projectID._id);
                ticket.btcAddress = subProjectInUser.btcAddress;
                ticket.ethAddress = subProjectInUser.ethAddress;
                ticket.ltcAddress = subProjectInUser.ltcAddress;
                ticket.fundingDuration = getDurationInDays(each.projectID.fundingDuration);
                ticket.datePaid = toReadableDate(each.datePaid);
                tickets.push(ticket);
            });
            this.setState({ loading: false, tickets: tickets });
        }
    }

    handleChange = name => event => {
        this.setState({ ...this.state, transferredEmail: event.target.value });
    }

    handleOK = () => {
        console.log('Ok');
    }

    handleClose = () => {
        this.setState({ ...this.state, showModal: false });
    }

    transferTicket = (id) => {
        this.setState({ ...this.state, showModal: true });
    }

    actionFormatter = (cell, row) => {
        return <div><button type="button" onClick={() => this.transferTicket(row._id)} className="btn btn-link btn-sm"><i className="fas fa-exchange-alt"></i></button></div>;
    }

    render() {
        const { loading, tickets, showModal, transferredEmail } = this.state;
        return(
            <div>
                <AuthHeader />
                <div className="container container-option">
                {loading && <div>...loading</div>}
                {!loading && <div>
                    <h1>Check Your Tickets Page</h1>
                    <BootstrapTable 
                        data={tickets}
                        striped={true}
                        hover={true}
                        pagination>
                        <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                        <TableHeaderColumn dataField="ticketPrice" dataSort={true}>TicketPrice(BTC/ETH/LTC)</TableHeaderColumn>
                        <TableHeaderColumn dataField="fundingDuration" dataSort={true}>Duration</TableHeaderColumn>
                        <TableHeaderColumn dataField="datePaid">Paid Date</TableHeaderColumn>
                        <TableHeaderColumn dataField="_id" dataFormat={this.actionFormatter} export={false} ></TableHeaderColumn>
                    </BootstrapTable>
                    
                </div>}
                {showModal && <Modal
                                aria-labelledby="transfer-ticket"
                                aria-describedby="transfer-ticket-description"
                                open={showModal}
                                onClose={this.handleClose}
                                >
                                <div className="myModal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <Typography variant="h5" id="modal-title">
                                        Transfer Ticket
                                    </Typography>
                                    <Typography variant="subtitle1" id="simple-modal-description">
                                        Please input email to transfer.
                                    </Typography>
                                    <div className="row mx-2">
                                        <TextField
                                            id="email"
                                            label="Email"
                                            type="email"
                                            value={transferredEmail}
                                            onChange={this.handleChange()}
                                            margin="normal"
                                        />
                                    </div>
                                  
                                    <button onClick={this.handleOK} className="btn btn-lg bg-dark text-white mr-2" >OK</button>
                                    <button onClick={this.handleClose} className="btn btn-lg bg-dark text-white" >Cancel</button>
                                </div>
                                </Modal>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tickets: state.app.tickets,
    };
}

export default connect(mapStateToProps)(CheckTickets);

