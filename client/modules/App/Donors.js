import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { fetchUser } from './AppActions';

class Donors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: '',
            country: '',
            region: '',
        };

        this.searchProject = this.searchProject.bind(this);
    }

    componentWillMount() {
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartproject');
            if (token == null || token == 'null') {
                browserHistory.push('/signin');
            }
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUser());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.res !== nextProps.res) {
            var data = [];
            for (const sub in res.user.subProjects) {
                sub.title = res.projects
            }
            this.setState({ ...this.state, loading: false });
        }
    }
    
    searchProject = name => event => {
        this.setState({
            ...this.state,
            search: event.target.value,
        });
    };

    priceFormatter = (cell, row) => {
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    render() {
        const { res, project } = this.props;
        console.log(res)
        return (
            <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                <Header />
                {this.state.loading && <div>loading...</div>}
                {!this.state.loading && <div>
                    <BootstrapTable 
                        data={res.user.subProjects}
                        striped={true}
                        hover={true}>
                        <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="totalTickets" dataSort={true}>Total Tickets</TableHeaderColumn>
                        <TableHeaderColumn dataField="paidTickets" dataFormat={this.priceFormatter}>Paid Tickets</TableHeaderColumn>
                        <TableHeaderColumn dataField="datePaid">Paid Date</TableHeaderColumn>
                    </BootstrapTable>
                </div>}
                <Footer />
            </div>
        );
    }
}

Donors.propTypes = {
    dispatch: PropTypes.func.isRequired,
      // intl: PropTypes.object.isRequired,
  };
  
  // Retrieve data from store as props
  function mapStateToProps(state) {
    return {
      res: state.app.res,
    };
  }
  
export default connect(mapStateToProps)(Donors);
  