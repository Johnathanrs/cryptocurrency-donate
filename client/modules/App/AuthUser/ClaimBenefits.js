import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';
import moment from 'moment';
import { toast } from 'react-toastify';

import { fetchUser } from '../AppActions';
import callApi from '../../../util/apiCaller';

class ClaimBenefits extends React.Component {
    constructor(props) {
        super(props);

        const today = new moment().format('YYYY-MM-DD');
        this.state = {
            loading: true,
            user: {
                fullName: '',
                email: '',
                birthday: today,
                nationality: '',
                address: '',
                phone: '',
                ID:''
            }
        };
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
          [`${name}Err`]: event.target.required && !event.target.value,
          user: {
            ...this.state.user,
            [name]: event.target.value,
          },
        });
    };

    save = () => {
        const { user } = this.state;
        this.setState({
            ...this.state,
            fullNameErr: !user.fullName,
            emailErr: !user.email,
            birthdayErr: !user.birthday,
            nationalityErr: !user.nationality,
            addressErr: !user.address,
            phoneErr: !user.phone,
            IDErr: !user.ID,
        });
        if (this.state.fullNameErr ||
            this.state.emailErr ||
            this.state.birthdayErr ||
            this.state.nationalityErr ||
            this.state.addressErr ||
            this.state.phoneErr ||
            this.state.IDErr) {
                toast.warn('Please fix the error before saving');
                this.setState({ ...this.state });
                return;
            }
        callApi('updateUser', 'PUT', { user: this.state.user }).then((res) => {
            let message = res.errors && res.errors || 'Successfully Saved';
            toast.warn(message);
        });
    }

    render() {
        const  { loading, user, fullNameErr, emailErr, birthdayErr, nationalityErr, addressErr, phoneErr, IDErr } = this.state;
        return(
            <div>
                <AuthHeader />
                <div className="container container-option" >
                    <h1>Claim Your Benefits Page</h1>
                    { !loading && <div>
                        <div className="row m-y-2">
                            <div className="col-6">
                                <TextField
                                    fullWidth
                                    required
                                    error={fullNameErr}
                                    id="outlined-full-input"
                                    label="Full Name"
                                    type="text"
                                    name="fullName"
                                    value={user.fullName}
                                    onChange={this.handleChange('fullName')}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    fullWidth
                                    error={emailErr}
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={this.handleChange('email')}
                                    autoComplete="email"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    required
                                    error={birthdayErr}
                                    id="outlined-birthday-input"
                                    label="Birthday"
                                    type="date"
                                    name="birthday"
                                    value={user.birthday}
                                    onChange={this.handleChange('birthday')}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    required
                                    error={nationalityErr}
                                    id="outlined-nationality-input"
                                    label="Nationality"
                                    type="text"
                                    name="nationality"
                                    value={user.nationality}
                                    onChange={this.handleChange('nationality')}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    required
                                    error={addressErr}
                                    id="outlined-address-input"
                                    label="Address"
                                    type="text"
                                    name="address"
                                    value={user.address}
                                    onChange={this.handleChange('address')}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    required
                                    error={phoneErr}
                                    id="outlined-phone-input"
                                    label="Phone"
                                    type="text"
                                    name="phone"
                                    value={user.phone}
                                    onChange={this.handleChange('phone')}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    required
                                    error={IDErr}
                                    id="outlined-ID-input"
                                    label="ID"
                                    type="text"
                                    name="ID"
                                    value={user.ID}
                                    onChange={this.handleChange('ID')}
                                    margin="normal"
                                />
                            </div>
                        </div>
                        <button onClick={() => this.save()} className="btn btn-lg bg-warning text-white mt-2 mb-2">Save</button>
                    </div>}
                    {loading && <div>...loading</div>}
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

export default connect(mapStateToProps)(ClaimBenefits);

