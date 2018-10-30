import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';
import callApi from '../../util/apiCaller';

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isCreate: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => event => {
        this.setState({
          ...this.state,
          [name]: event.target.value,
        });
    };

    navigate = (url) => {
        browserHistory.push(url);
    }

    change = () => {
        const { user, newPassword, confirmPassword } = this.state;
        this.setState({
            ...this.state,
            passwordErr: !newPassword || !confirmPassword || newPassword != confirmPassword,
        });
        if (this.state.passwordErr) {
            toast.warn('Password does not match');
            this.setState({ ...this.state });
            return;
        }
        callApi('users/changePassword', 'PUT', { password: this.state.newPassword, token: this.props.params.token }).then((res) => {
            let message = res.errors && res.errors || 'Successfully Updated';
            toast.warn(message);
        });
    }

    render() {
        const { loading, user, passwordErr, newPassword, confirmPassword } = this.state;
        return (
            <div className="container mt-100">
                <div className="card" style={{ width: '33%', margin: '0 auto', minWidth: '330px' }}>
                    <div className="card-head mt-5 text-center">
                        <h3 className="text-center text-uppercase">Change Password</h3>
                        {this.state.isCreate && <i className="fa fa-spinner fa-spin fa-3x text-red"></i>}
                        {!this.state.isCreate && <div className="warning-color text-center">{this.state.errOnCreate}</div>}
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column card-body">
                        <TextField
                            required
                            error={passwordErr}
                            id="newPassword-input"
                            label="New Password"
                            type="password"
                            name="newPassword"
                            value={newPassword}
                            onChange={this.handleChange('newPassword')}
                            margin="normal"
                        />
                        <TextField
                            required
                            error={passwordErr}
                            id="confirmPassword-input"
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.handleChange('confirmPassword')}
                            margin="normal"
                        />
                        <button onClick={() => this.change()} className="btn btn-lg bg-warning text-white mt-4 mb-4">Update</button>
                        <p>Do you already have an account? <a href="javascript:void(0)" onClick={() => this.navigate('/user/signin')} className="warning-color">Sign In</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      token: state.auth.token,
    };
}

export default connect(mapStateToProps)(ChangePassword);
