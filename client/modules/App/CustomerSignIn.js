import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';
import callApi from '../../util/apiCaller';
import { saveToken } from './AuthActions';

class CustomerSignIn extends Component {
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
        callApi('users/customersignin', 'POST', { user: this.state }).then((res, err) => {
            let message = 'Successfully signin';
            if  (res.errors) {
                message = res.errors;
                toast.warn(message);
            } else {
                const tokenData = window.localStorage.getItem('smartproject');
                let jsonData = {};
                try {
                    jsonData = JSON.parse(tokenData);
                } catch(err) {
                    console.log(err);
                }
                jsonData.email = res.user.email;
                jsonData.token = res.user.token;
                jsonData.isSignIn = true;
                window.localStorage.setItem('smartproject', JSON.stringify(jsonData));
                this.props.dispatch(saveToken(res.user.token));
                // browserHistory.goBack();
                this.navigate('/user/mytickets');
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
                        <button onClick={() => this.signIn()} className="btn btn-lg bg-warning text-white mt-4 mb-3">Sign In</button>
                        <a href="javascript:void(0)" onClick={() => this.navigate('/user/forgetpassword')} className="warning-color mb-2">Forget password?</a>
                        <div className="mb-2">Do you want to have an account? <a href="javascript:void(0)" onClick={() => this.navigate('/user/signup')} className="warning-color">Sign Up</a>
                        </div>
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

export default connect(mapStateToProps)(CustomerSignIn);
