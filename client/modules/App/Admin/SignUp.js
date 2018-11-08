import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { browserHistory } from 'react-router';

import '../App.css';
import { Button } from '@material-ui/core';
import callApi from '../../../util/apiCaller';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password_repeat: '',
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

    handleKeyDown = name => event => {
        if(event.keyCode == 13) {
            this.signUp();
        }
    }

    navigate = (url) => {
        browserHistory.push(url);
    }

    signUp = () => {
        const self = this;
        self.setState({ ...self.state, isCreate: true});
        callApi('users/signup', 'POST', { user: this.state }).then((res, err) => {
            let message = 'Successfully created';
            if  (res.errors) {
                message = res.errors;
            } else {
                localStorage.setItem('smartprojectadmin', res.user.token);
                browserHistory.push('/');
            }
            self.setState({ ...self.state, isCreate: false, errOnCreate: message });
        });
    }

    render() {
        return (
            <div className="container mt-100">
                <div className="card" style={{ width: '33%', margin: '0 auto', minWidth: '330px' }}>
                    <div className="card-head mt-5 text-center">
                        <h2 className="text-center text-uppercase">Sign Up</h2>
                        {this.state.isCreate && <i className="fa fa-spinner fa-spin fa-3x text-red"></i>}
                        {!this.state.isCreate && <div className="warning-color text-center">{this.state.errOnCreate}</div>}
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column card-body">
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className="textField"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            className="textField"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            autoComplete="current-password"
                            margin="normal"
                        />
                        <TextField
                            id="standard-password-input_repeat"
                            label="Password"
                            className="textField"
                            type="password"
                            value={this.state.password_repeat}
                            onChange={this.handleChange('password_repeat')}
                            autoComplete="current-password"
                            onKeyDown={this.handleKeyDown()}
                            margin="normal"
                        />
                        <button onClick={() => this.signUp()} className="btn btn-lg bg-warning text-white mt-2 mb-2">Sign Up</button>
                        <span className="text-uppercase mt-2 mb-2">Or</span>
                        <p>Do you already have an account? please <a href="javascript:void(0)" onClick={() => this.navigate('/signin')} className="warning-color">Sign In</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
