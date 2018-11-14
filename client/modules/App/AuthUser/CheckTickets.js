import React from 'react';
import { connect } from 'react-redux';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LTC_ROUNDED from '../../../assets/img/Litecoin.png';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { toast } from 'react-toastify';
import { getDurationInDays, toReadableDate, getEmail } from '../../../util/util';
import callApi from '../../../util/apiCaller';
import { fetchTickets } from '../AppActions';

class CheckTickets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            showModal: false,
            email: '',
        };
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
                if (each.projectID) {
                    ticket.btcTicketPrice = each.projectID.ticketPriceInBTC;
                    ticket.ethTicketPrice = each.projectID.ticketPriceInETH;
                    ticket.ltcTicketPrice = each.projectID.ticketPriceInLTC;
                    ticket.projectID = each.projectID._id;
                    ticket.title = each.projectID.title;
                    const subProjectInUser = each.userID.subProjects.filter(sub => sub.projectID == each.projectID._id)[0];
                    if (subProjectInUser) {
                        ticket.btcAddress = subProjectInUser.btcAddress;
                        ticket.ethAddress = subProjectInUser.ethAddress;
                        ticket.ltcAddress = subProjectInUser.ltcAddress;
                        ticket.fundingDuration = getDurationInDays(each.projectID.fundingDuration);
                        ticket.datePaid = toReadableDate(each.dateAdded);
                        tickets.push(ticket);
                    }
                }
            });
       
            this.setState({ loading: false, tickets: tickets });
        }
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.value, [name+'Err']: !event.target.value });
    }

    handleKeyDown = name => event => {
        if(event.keyCode == 13) {
            this.handleOK();
        }
    }

    handleOK = () => {
        if (!this.state.email) {
            this.setState({ ...this.state, emailErr: true });
            return;
        }
        if (!this.state.message) {
            this.setState({ ...this.state, messageErr: true });
            return;
        }
        this.transferTicket();
        this.handleClose();
    }

    handleClose = () => {
        this.setState({ ...this.state, showModal: false });
    }

    transferTicket = () => {
        const { ticket, email, message } = this.state;
        const body = {
            ticketID: ticket._id,
            projectID: ticket.projectID,
            tickets: 1,
            btcAddress: ticket.btcAddress,
            ethAddress: ticket.ethAddress,
            ltcAddress: ticket.ltcAddress,
            btcTicketPrice: ticket.btcTicketPrice,
            ethTicketPrice: ticket.ethTicketPrice,
            ltcTIcketPrice: ticket.ltcTIcketPrice,
            transferredEmail: email,
            message: message,
            owner: getEmail(),
        };
        callApi('transferTickets', 'POST', body).then((res, err) => {
            if (res.errors) {
                toast.warn(res.errors);
            } else if (res.status == 'OK') {
                console.log(res);
                toast.warn('Successfully transferred');
                this.props.dispatch(fetchTickets());
            }
        });
    }

    showTransferModal = (ticket) => {
        this.setState({ ...this.state, showModal: true, ticket });
    }

    actionFormatter = (cell, row) => {
        return <div><button type="button" onClick={() => this.showTransferModal(row)} className="btn btn-link btn-sm"><i className="fa fa-exchange fa-2x" aria-hidden="true"></i></button></div>;
    }

    render() {
        const { loading, tickets, showModal, email, emailErr, messageErr, message } = this.state;
        return(
            <div>
                <AuthHeader />
                <div className="container container-option">
                {loading && <div>...loading</div>}
                {!loading && <div>
                    <h1>Check Your Tickets Page</h1>
                    <BootstrapTable
                        data={tickets}
                        striped
                        hover
                        pagination
                        options={{ paginationShowsTotal: true }}>
                        <TableHeaderColumn dataField="_id" isKey hidden dataSort>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="title" dataSort>Title</TableHeaderColumn>
                        <TableHeaderColumn dataField="btcTicketPrice" dataSort><i className="fa fa-bitcoin fa-2x" aria-hidden="true"></i></TableHeaderColumn>
                        <TableHeaderColumn dataField="ethTicketPrice" dataSort><i className="fa fa-ethereum fa-2x" aria-hidden="true"></i></TableHeaderColumn>
                        <TableHeaderColumn dataField="ltcTicketPrice" dataSort> <img src={LTC_ROUNDED} alt="LTC" width="30" height="30" /></TableHeaderColumn>
                        <TableHeaderColumn dataField="fundingDuration" dataSort>Duration (Days)</TableHeaderColumn>
                        <TableHeaderColumn dataField="datePaid" >Paid Date</TableHeaderColumn>
                        <TableHeaderColumn dataField="_id" dataAlign="center" dataFormat={this.actionFormatter} export={false} width="150">Transfer Tickets</TableHeaderColumn>
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
                                        Please input email to transfer. And Leave a message.
                                    </Typography>
                                    <div className="d-flex flex-column mx-2 mt-2 mb-2">
                                        <TextField
                                            required
                                            error={emailErr}
                                            id="email"
                                            label="Email"
                                            type="email"
                                            value={email}
                                            onChange={this.handleChange('email')}
                                            onKeyDown={this.handleKeyDown()}
                                            margin="normal"
                                        />
                                        <TextField
                                            fullWidth
                                            required
                                            id="message"
                                            error={messageErr}
                                            label="Message"
                                            multiline
                                            rowsMax="4"
                                            value={message}
                                            onChange={this.handleChange('message')}
                                            margin="normal"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button onClick={this.handleOK} className="btn btn-lg bg-dark text-white mr-2" >OK</button>
                                        <button onClick={this.handleClose} className="btn btn-lg bg-dark text-white" >Cancel</button>
                                    </div>
                                </div>
                            </Modal>}
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

