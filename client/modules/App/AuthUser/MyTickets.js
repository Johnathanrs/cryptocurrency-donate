import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'reactstrap';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import { getDurationInDays, toReadableDate } from '../../../util/util';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';

import { fetchOrders, deleteTickets } from '../AppActions';

class MyTickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: '',
            country: '',
            region: '',
            paid: true,
            unPaid: true,
            modal: false,
        };

        this.searchProject = this.searchProject.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchOrders()).then(res => {
            if (res.errors) {
                browserHistory.push('/user/signin');
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.orders !== nextProps.orders) {
            this.setState({ ...this.state, loading: false });
        }
    }

    findProject = (ID) => {
        for (const index in this.props.res.projects) {
            if (this.props.res.projects[index]._id == ID) {
                return this.props.res.projects[index];
            }
        }
    }
    
    searchProject = name => event => {
        this.setState({
            ...this.state,
            search: event.target.value,
        });
    };

    gotoHome = (id) => {
        browserHistory.push(`/${id._id}`);
    }

    deleteTickets = (row) => {
        if (row.status === 'full') {
            return;
        }

        this.showModal(row);
    }

    showModal = (row) => {
        if (row.status == 'full') {
            return;
        }
        this.setState({ ...this.state, modal: true, order: row });
    }

    handleOk = () => {
        this.props.dispatch(deleteTickets(this.state.order)).then(err => {
            if (err) {
                toast.warn(err);
                this.handleClose();
            }

            this.props.dispatch(fetchOrders());
        });
    }

    handleClose = () => {
        this.setState({ ...this.state, modal: false });
    }

    actionFormatter = (cell, row) => {
        return <div><button type="button" onClick={() => this.deleteTickets(row)} className="btn btn-link btn-sm"><i className="fa fa-trash fa-2x"></i></button><button className="btn btn-link btn-info" onClick={()=> this.gotoHome(row.projectID)}><i className="fa fa-plus fa-2x"></i></button></div>;
    }

    handlePaidFilter = name => {
        this.setState({
            ...this.state,
            [name.target.name]: name.target.checked,
        });
    }

    render() {
        const { orders, params } = this.props;
        const { loading, modal } = this.state;
        let data = [];
        if (!this.state.loading && orders) {
            for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                const project = order.projectID;
                if (!project) continue;
                order.title = project.title;
                order.pID = project._id;
                order.days = getDurationInDays(project.fundingDuration);
                order.startDate = toReadableDate(project.dateAdded);
                if (!order.datePaid || order.datePaid == '-') {
                    order.datePaid = '-';
                } else {
                    order.datePaid = toReadableDate(order.datePaid);
                }
                order.coins = `${order.btcAmount}/${order.ethAmount}/${order.ltcAmount}`;
                order.ticketPrice = `${order.btcTicketPrice}/${order.ethTicketPrice}/${order.ltcTicketPrice}`;
               
                if (this.state.unPaid && order.status == 'pending') {
                    data.push(order);
                } 
                if (this.state.paid && order.status != 'pending') {
                    data.push(order);
                }
            }
        }
        return (
            <div className="container container-option">
                <AuthHeader token={this.state.token} />
                {loading && <div>loading...</div>}
                {!loading && params.sender && <div className="alert alert-success">
                    <strong>Congulatulation!</strong> You have received a gift from {params.sender}.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>}
                {!loading && <div>
                    <div className="d-flex align-items-center mb-1">
                        <h3 className="fb">My Tickets</h3>
                      
                        <div className="custom-control custom-checkbox mx-2">
                            <input type="checkbox" className="custom-control-input" name="paid" id="customCheck1" onChange={this.handlePaidFilter} checked={this.state.paid} />
                            <label className="custom-control-label" htmlFor="customCheck1">Paid Tickets</label>
                        </div>
                        <div className="custom-control custom-checkbox mx-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" name="unPaid" onChange={this.handlePaidFilter} checked={this.state.unPaid} />
                            <label className="custom-control-label" htmlFor="customCheck2">UnPaid Tickets</label>
                        </div>
                    </div>
                    <BootstrapTable 
                        data={data}
                        striped
                        hover
                        pagination
                        options={{ paginationShowsTotal: true }} >
                        <TableHeaderColumn dataField="_id" isKey hidden dataAlign="center" dataSort>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="title" dataSort>Title</TableHeaderColumn>
                        <TableHeaderColumn dataField="selectedTickets" dataSort>Selected Tickets</TableHeaderColumn>
                        <TableHeaderColumn dataField="paidTickets" >Purchased Tickets</TableHeaderColumn>
                        <TableHeaderColumn dataField="coins" dataSort>Coins(BTC/ETH/LTC)</TableHeaderColumn>
                        <TableHeaderColumn dataField="datePaid">Paid Date</TableHeaderColumn>
                        <TableHeaderColumn dataField="projectID" dataFormat={this.actionFormatter} export={false} ></TableHeaderColumn>
                    </BootstrapTable>
                </div>}
                <Footer />
                <Modal
                    aria-labelledby="transfer-ticket"
                    aria-describedby="transfer-ticket-description"
                    open={modal}
                    onClose={this.handleClose}
                    >
                    <div className="myModal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <Typography variant="h5" id="modal-title">
                            Conformation
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description" className="mt-2">
                            Are you sure?
                        </Typography>
                        <div className="row mt-4 justify-content-end">
                            <Button color="primary" onClick={this.handleOk}>Ok</Button>{' '}
                            <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

MyTickets.propTypes = {
    dispatch: PropTypes.func.isRequired,
      // intl: PropTypes.object.isRequired,
  };
  
  // Retrieve data from store as props
  function mapStateToProps(state) {
    return {
      orders: state.app.orders,
    };
  }
  
  export default connect(mapStateToProps)(MyTickets);
  