import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';
import moment from 'moment';
import { post } from 'axios';
import { toast } from 'react-toastify';

import { fetchUser } from '../AppActions';
import callApi from '../../../util/apiCaller';

class ClaimBenefits extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            imageUpload: false,
            user: {
                fullName: '',
                email: '',
                birthday: '',
                nationality: '',
                address: '',
                phone: '',
                payout: '',
                ID:''
            },
            IDErr: true,
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
            const today = new moment().format('YYYY-MM-DD');
            const user = nextProps.res.user;
            if (!user.birthday) {
                user.birthdayPlaceholder = today;
            }
            this.setState({ loading: false, user: user });
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
            payoutErr: !user.payout,
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

    handleFileUpload = (files) => {
        const self = this;
        this.setState({ ...this.state, imageUpload: true });
        let file = files[0];
        const url = '/api/upload';
        const formData = new FormData();
        formData.append('uploadFile', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        post(url, formData, config)
            .then(function (res) {
                toast.warn('ID uploaded');
                self.setState({
                    ...self.state,
                    imageUpload: false,
                    IDErr: false,
                    user: {
                        ...self.state.user,
                        ID: res.data,
                    }
                });
            })
            .catch(function (err) {
                toast.warn('Error happened during the ID Upload');
                self.setState({ ...self.state, imageUpload: false });
            });
    }

    render() {
        const  { loading, user, fullNameErr, emailErr, birthdayErr, nationalityErr, addressErr, phoneErr, payoutErr, IDErr } = this.state;
        let $imagePreview = null;
        if (user.ID) {
            $imagePreview = (<img src={`http://${ window.location.host}/${user.ID}`} />);
        }
        return(
            <div>
                <AuthHeader />
                <div className="container container-option" >
                    { !loading && <div><h1>Claim Your Benefits Page</h1>
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
                                    placeholder={user.birthdayPlaceholder}
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
                                    error={payoutErr}
                                    id="outlined-Payout-input"
                                    label="Payout Address in BTC"
                                    type="text"
                                    name="payout"
                                    value={user.payout}
                                    onChange={this.handleChange('payout')}
                                    margin="normal"
                                />
                                <div className="">
                                    <p className="fb">ID Upload</p>
                                    <div>
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="contained-button-file"
                                            type="file"
                                            onChange={ (e) => this.handleFileUpload(e.target.files) }
                                            name="uploadFile"
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button type="submit" variant="contained" component="span">
                                                Upload
                                            </Button>
                                            {this.state.imageUpload && <i className="fa fa-spinner fa-spin fa-3x text-red"></i>}
                                            {IDErr && <span className="warning-color ml-1">Reqired*</span>}
                                        </label>
                                    </div>
                                    
                                    <div className="imgPreview">
                                        {$imagePreview}
                                    </div>
                                </div>
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

