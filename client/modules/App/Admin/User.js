import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchUsers } from '../AppActions';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

import { toReadableDate } from '../../../util/util';

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

    displayDetail = (id) => {
        const curUser = this.props.users.filter(user => user._id == id);
        this.setState({ ...this.state, isDetailOpen: true, curUser: curUser[0] });
    }

    actionFormatter = (cell, row) => {
        return <div><button type="button" onClick={() => this.displayDetail(row._id)} className="btn btn-link btn-sm"><i className="fa fa-info-circle fa-2x"></i></button></div>;
    }
    
    render() {
        const { users } = this.props;
        const { loading, isDetailOpen, curUser } = this.state;
        if (!loading) {
            users.map(user => {
                user.dateAdded = toReadableDate(user.dateAdded);
            });
        }

        return (
            <div>
                <AdminHeader />
                <div className="container container-option">
                    <h1>Users Page</h1>
                    {loading && <div>loading...</div>}
                    {!loading && <div>
                        <BootstrapTable 
                            data={users}
                            striped={true}
                            hover={true}
                            pagination>
                            <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="email" dataSort={true}>Email</TableHeaderColumn>
                            <TableHeaderColumn dataField="role" dataSort={true}>Role</TableHeaderColumn>
                            <TableHeaderColumn dataField="dateAdded">Registered Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="_id" width="70" dataFormat={ this.actionFormatter } export={ false } ></TableHeaderColumn>
                        </BootstrapTable>
                        {isDetailOpen && <div className="card p-4">
                            <div className="card-title"><h3>User Detail</h3></div>
                            <div className="card-body">
                                <p><strong>Email: </strong> {curUser.email} </p>
                                <p><strong>Full Name: </strong> {curUser.fullName} </p>
                                <p><strong>Birthday: </strong> {toReadableDate(curUser.birthday)} </p>
                                <p><strong>Nationality: </strong> {curUser.nationality} </p>
                                <p><strong>Address: </strong> {curUser.address} </p>
                                <p><strong>Phone: </strong> {curUser.phone} </p>
                                <p><strong>ID: </strong> <a href={`http://${window.location.host}/${curUser.ID}`} target="_blank">Download</a></p>   
                            </div>       
                        </div>}
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
