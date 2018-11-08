import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { browserHistory } from 'react-router';

import '../App.css';
import callApi from '../../../util/apiCaller';
import { toast } from 'react-toastify';

import { saveToken } from '../AuthActions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
            this.signIn();
        }
    }

    navigate = (url) => {
        browserHistory.push(url);
    }

    signIn = () => {
        const self = this;
        self.setState({ ...self.state, isCreate: true, errOnCreate: '' });
        callApi('users/signin', 'POST', { user: this.state }).then((res, err) => {
            let message = 'Successfully Logged in';
            if  (res.errors) {
                message = res.errors;
            } else {
                window.localStorage.setItem('smartprojectadmin', res.user.token);
                this.props.dispatch(saveToken(res.user.token));
                this.navigate('admin/dashboard')
            }
            self.setState({ ...self.state, isCreate: false, errOnCreate: message });
        });
    }
    
    render() {
        return (
            <div className="container mt-100">
                <div className="card" style={{ width: '33%', margin: '0 auto', minWidth: '330px' }}>
                    <div className="card-head mt-5 text-center">
                        <h2 className="text-center text-uppercase">Sign In</h2>
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
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            onKeyDown={this.handleKeyDown()}
                            autoComplete="email"
                            margin="normal"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            className="textField"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            onKeyDown={this.handleKeyDown()}
                            autoComplete="current-password"
                            margin="normal"
                        />
                        <button onClick={() => this.signIn()} className="btn btn-lg bg-warning text-white mt-2 mb-2">Sign In</button>
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

export default connect(mapStateToProps)(SignIn);
