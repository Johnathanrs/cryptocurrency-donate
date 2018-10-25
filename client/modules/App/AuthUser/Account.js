import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';

import { fetchUser } from '../AppActions';
import callApi from '../../../util/apiCaller';
import { toast } from 'react-toastify';

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            newPassword: '',
            confirmPassword: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartproject');
            this.setState({ isUnAuth: !token, token });
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUser());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.res != nextProps.res) {
            this.setState({ loading: false, user: nextProps.res.user });
        }
    }
    
    handleChange = name => event => {
        this.setState({
          ...this.state,
          [name]: event.target.value,
        });
    };

    save = () => {
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
        callApi('updateUser', 'PUT', { user: this.state.user, password: this.state.newPassword }).then((res) => {
            let message = res.errors && res.errors || 'Successfully Saved';
            toast.warn(message);
        });
    }

    render() {
        const { loading, user, passwordErr, newPassword, confirmPassword } = this.state;
        const { res } = this.props;
        return(
            <div>
                <AuthHeader />
                <div className="container container-option">
                    {loading && <div>...loading</div>}
                    {!loading && <div>
                        <h1 className="mb-4">Account Page</h1>
                        <div className="card profile">
                            <div className="row card-body">
                                <div className="col-7">
                                    <p><strong>Email: </strong> {user.email} </p>
                                    <p><strong>Full Name: </strong> {user.fullName} </p>
                                    <p><strong>Birthday: </strong> {user.birthday} </p>
                                    <p><strong>Nationality: </strong> {user.nationality} </p>
                                    <p><strong>Address: </strong> {user.address} </p>
                                    <p><strong>Phone: </strong> {user.phone} </p>
                                    <p><strong>ID: </strong> {user.ID} </p>          
                                </div>
                                <div className="col-5">
                                    <h4>Change Password</h4>
                                    <TextField
                                        fullWidth
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
                                        fullWidth
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
                                    <button onClick={() => this.save()} className="btn btn-lg bg-warning text-white mt-2 mb-2 float-right">Update</button>
                                </div>
                            </div> 
                        </div>     
                    </div>}
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        res: state.app.res,
    };
}

export default connect(mapStateToProps)(Account);
