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
import { fetchUser, fetchProjects } from '../AppActions';

class MyTickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: '',
            country: '',
            region: '',
            payed: true,
            unPayed: false,
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
        this.props.dispatch(fetchUser());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.res !== nextProps.res) {
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

    handlePayedFilter = name => {
        this.setState({
            ...this.state,
            [name.target.name]: name.target.checked,
        });
    }

    render() {
        const { res } = this.props;
        let data = [];
        if (!this.state.loading && res) {
            for (const sub in res.user.subProjects) {
                const selected = res.user.subProjects[sub];
                const project = this.findProject(selected.projectID);
                if (project) {
                    selected.title = project.title;
                    const a = moment(project.fundingDuration, 'YYYY-MM-DD');
                    const b = moment().format('YYYY-MM-DD');
                    selected.days = a.diff(b, 'days');
                    selected.startDate = moment(selected.dateAdded).format('MMM DD, YYYY');
                    if (!selected.datePaid || selected.datePaid == '-' || selected.datePaid == 'Invalid date') {
                        selected.datePaid = '-';
                    } else {
                        selected.datePaid = moment(selected.datePaid).format('MMM DD, YYYY');
                    }
                    selected.coins = `${selected.paidAmountBTC}/${selected.paidAmountETH}/${selected.paidAmountLTC}`;
                    if (this.state.payed && selected.datePaid != '-') {
                        data.push(selected);
                    } 
                    if (this.state.unPayed && selected.datePaid == '-') {
                        data.push(selected);
                    }
                }
            }
        }
        return (
            <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                <AuthHeader token={this.state.token} />
                {this.state.loading && <div>loading...</div>}
                {!this.state.loading && <div>
                    <div className="d-flex align-items-center">
                        <h3 className="fb">My Tickets</h3>
                        <div className="custom-control custom-checkbox mx-2">
                            <input type="checkbox" className="custom-control-input" name="payed" id="customCheck1" onChange={this.handlePayedFilter} checked={this.state.payed}/>
                            <label className="custom-control-label" htmlFor="customCheck1">Payed Tickets</label>
                        </div>
                        <div className="custom-control custom-checkbox mx-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" name="unPayed" onChange={this.handlePayedFilter} />
                            <label className="custom-control-label" htmlFor="customCheck2">UnPayed Tickets</label>
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
                        <TableHeaderColumn dataField="paidTickets" dataFormat={this.priceFormatter}>Purchased Tickets</TableHeaderColumn>
                        <TableHeaderColumn dataField="coins" dataSort={true}>Coins(BTC/ETH/LTC)</TableHeaderColumn>
                        <TableHeaderColumn dataField="datePaid">Paid Date</TableHeaderColumn>
                        <TableHeaderColumn dataField="projectID" dataFormat={ this.actionFormatter } export={ false }></TableHeaderColumn>
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
      res: state.app.res,
    };
  }
  
  export default connect(mapStateToProps)(MyTickets);
  