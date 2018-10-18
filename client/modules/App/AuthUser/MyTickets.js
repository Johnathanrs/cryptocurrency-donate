import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import moment from 'moment';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';

import '../App.css';
import { fetchOrders } from '../AppActions';

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
        };

        this.searchProject = this.searchProject.bind(this);
    }

    componentWillMount() {
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartproject');
            if (token == null || token == 'null') {
                browserHistory.push('/signin');
            }
            this.setState({ ...this.state, token })
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchOrders());
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
        browserHistory.push(`/home/${id}`);
    }

    priceFormatter = (cell, row) => {
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    actionFormatter = (cell, row) => {
        return <button className="btn btn-info" onClick={()=> this.gotoHome(row.projectID)}>Purchase</button>;
    }

    handlePaidFilter = name => {
        this.setState({
            ...this.state,
            [name.target.name]: name.target.checked,
        });
    }

    render() {
        const { orders } = this.props;
        let data = [];
        if (!this.state.loading && orders) {
            for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                const project = order.projectID;
                order.title = project.title;
                order.pID = project._id;
                const a = moment(project.fundingDuration, 'YYYY-MM-DD');
                const b = moment().format('YYYY-MM-DD');
                order.days = a.diff(b, 'days');
                order.startDate = moment(project.dateAdded).format('MMM DD, YYYY');
                if (!order.datePaid || order.datePaid == '-') {
                    order.datePaid = '-';
                } else {
                    order.datePaid = moment(order.datePaid).format('MMM DD, YYYY');
                }
                order.coins = `${order.btcAmount}/${order.ethAmount}/${order.ltcAmount}`;
                order.ticketPrice = `${order.btcTicketPrice}/${order.ethTicketPrice}/${order.ltcTicketPrice}`;
               
                if (this.state.unPaid && order.status == 'pending') {
                    data.push(order);
                } 
                if (this.state.paid && order.status == 'paid') {
                    data.push(order);
                }
            }
        }
        return (
            <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                <AuthHeader token={this.state.token} />
                {this.state.loading && <div>loading...</div>}
                {!this.state.loading && <div>
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
                        striped={true}
                        hover={true}
                        pagination>
                        <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                        <TableHeaderColumn dataField="totalTickets" dataSort={true}>Selected Tickets</TableHeaderColumn>
                        <TableHeaderColumn dataField="selectedTickets" dataFormat={this.priceFormatter}>Purchased Tickets</TableHeaderColumn>
                        <TableHeaderColumn dataField="coins" dataSort={true}>Coins(BTC/ETH/LTC)</TableHeaderColumn>
                        <TableHeaderColumn dataField="datePaid">Paid Date</TableHeaderColumn>
                        <TableHeaderColumn dataField="pID" dataFormat={ this.actionFormatter } export={ false } ></TableHeaderColumn>
                    </BootstrapTable>
                </div>}
                <Footer />
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
  