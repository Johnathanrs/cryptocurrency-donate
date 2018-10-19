import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchUsers } from '../AppActions';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentWillMount(){
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartprojectadmin');
            if (token == null) {
                browserHistory.push('/admin/signin');
            } 
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.users !== nextProps.users) {
            this.setState({ ...this.state, loading: false });
        }
    }

    render() {
        const { users } = this.props;
        console.log('users', users);

        return (
            <div>
                <AdminHeader />
                <div className="container-fluid mt-100">
                    <h1>Users Page</h1>
                    {this.state.loading && <div>loading...</div>}
                    {!this.state.loading && <div>
                        <BootstrapTable 
                            data={users}
                            striped={true}
                            hover={true}
                            pagination>
                            <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="email" dataSort={true}>Email</TableHeaderColumn>
                            <TableHeaderColumn dataField="totalTickets" dataSort={true}>Selected Tickets</TableHeaderColumn>
                            <TableHeaderColumn dataField="selectedTickets" dataFormat={this.priceFormatter}>Purchased Tickets</TableHeaderColumn>
                            <TableHeaderColumn dataField="coins" dataSort={true}>Coins(BTC/ETH/LTC)</TableHeaderColumn>
                            <TableHeaderColumn dataField="datePaid">Paid Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="pID" dataFormat={ this.actionFormatter } export={ false } ></TableHeaderColumn>
                        </BootstrapTable>
                    </div>}
                </div>
                <Footer />
            </div>
        );
    }
}

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
    // intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    users: state.app.users,
  };
}

export default connect(mapStateToProps)(User);
