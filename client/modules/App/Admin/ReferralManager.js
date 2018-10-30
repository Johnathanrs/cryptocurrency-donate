import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchSettings } from '../AppActions';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

import callApi from '../../../util/apiCaller';
import { toast } from 'react-toastify';

class ReferralManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isCreate: false,
            settings: {
                referralPercent: '',
            }
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchSettings());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.settings != nextProps.settings) {
            this.setState({ ...this.state, loading: false, settings: nextProps.settings });
        }
    }

    handleChange = name => event => {
        this.setState({
          ...this.state,
          settings: {
              ...this.state.settings,
              [name]: event.target.value,
          }
        });
    };

    navigate = (url) => {
        browserHistory.push(url);
    }

    save = () => {
        const self = this;
        self.setState({ ...self.state, isCreate: true });
        callApi('updateSettings', 'POST', { settings: this.state.settings }).then((res, err) => {
            let message = 'Successfully updated';
            if  (res.errors) {
                message = res.errors;
            }
            self.setState({ ...self.state, isCreate: false });
            toast.warn(message);
        });
    }

    render() {
        const { loading, settings } = this.state;
        return (
            <div>
                <AdminHeader />
                <div className="container container-option">
                    <h1>Referral</h1>
                    {this.state.isCreate && <i className="fa fa-spinner fa-spin fa-3x text-red"></i>}
                    {loading && <div>loading...</div>}
                    { !loading && settings &&
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <TextField
                                        id="outlined-referralPercent-input"
                                        label="Referral (%)"
                                        className="textField"
                                        type="number"
                                        name="referralPercent"
                                        value={settings.referralPercent}
                                        onChange={this.handleChange('referralPercent')}
                                        margin="normal"
                                    />
                                    <button onClick={() => this.save()} className="btn btn-lg bg-warning text-white mt-4 mb-4">Update</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <Footer />
            </div>   
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
      settings: state.app.settings,
    };
  }
  
export default connect(mapStateToProps)(ReferralManager);
  