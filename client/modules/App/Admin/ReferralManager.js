import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchUsers } from '../AppActions';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

import { toReadableDate } from '../../../util/util';

class ReferralManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
      settings: state.app.users,
    };
  }
  
export default connect(mapStateToProps)(ReferralManager);
  