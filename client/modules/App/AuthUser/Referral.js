import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';
import { toast } from 'react-toastify';
import callApi from '../../../util/apiCaller';
import { toReadableDate } from '../../../util/util';
import { fetchReferrals } from '../AppActions';

class Referral extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            showModal: false,
        };
    }
    
    componentWillMount() {
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartproject');
            this.setState({ isUnAuth: !token, token });
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchReferrals());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.referrals != nextProps.referrals) {
            this.setState({ ...this.state, loading: false });
        }
    }

    showModal = () => {
        this.setState({ ...this.state, showModal: true });
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.value, [name+'Err']: !event.target.value });
    }

    handleOK = () => {
        if (!this.state.field1) {
            this.setState({ ...this.state, field1Err: true });
            return;
        }
        if (!this.state.field2) {
            this.setState({ ...this.state, field2Err: true });
            return;
        }
        this.handleClose();
        this.addNewReferral();
    }

    handleClose = () => {
        this.setState({ ...this.state, showModal: false });
    }

    addNewReferral = () => {
        const body = {
            receiver: this.state.email,
            field1: this.state.field1,
            field2: this.state.field2,
        };

        callApi('addNewReferral', 'POST', body).then(res => {
            if (res.errors) {
                toast.warn(res.errors);
            } else if (res.status == 'OK') {
                console.log(res);
                toast.warn('Successfully Added');
                this.props.dispatch(fetchReferrals());
            }
        });
    }

    dateFormatter = (cell, row) => {
        return <div>{toReadableDate(cell)}</div>;
    }

    render() {
        const { loading, showModal, field1, field2, field1Err, field2Err, email, emailErr } = this.state;
        const { referrals } = this.props;
        return(
            <div>
                <AuthHeader />
                <div className="container container-option">
                    {loading && <div>...loading</div>}
                    {!loading && <div>
                        <div className="d-flex">
                            <h1 style={{ flexGrow: 1 }}>Referral Page</h1>
                            <button type="button" onClick={this.showModal} className="btn btn-large btn-link"><i className="fa fa-plus"></i>Add New</button>
                        </div>
                        <BootstrapTable
                            data={referrals}
                            striped
                            hover
                            pagination>
                            <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="isReferred" dataSort={true}>Referred</TableHeaderColumn>
                            <TableHeaderColumn dataField="paidout" dataSort={true}>Payout</TableHeaderColumn>
                            <TableHeaderColumn dataField="dateAdded" dataAlign="center" dataFormat={this.dateFormatter} >Create Date</TableHeaderColumn>
                        </BootstrapTable>
                    </div>}
                    {showModal && <Modal
                                aria-labelledby="transfer-ticket"
                                aria-describedby="transfer-ticket-description"
                                open={showModal}
                                onClose={this.handleClose}
                                >
                                <div className="myModal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <Typography variant="h5" id="modal-title">
                                        Create New Referral Link.
                                    </Typography>
                                    <Typography variant="subtitle1" id="simple-modal-description">
                                        Please input fields for referral link.
                                    </Typography>
                                    <div className="row mx-2 mb-2">
                                        <TextField
                                            required
                                            error={emailErr}
                                            id="email"
                                            label="Email"
                                            type="email"
                                            value={email}
                                            onChange={this.handleChange('email')}
                                            margin="normal"
                                        />
                                        <TextField
                                            required
                                            error={field1Err}
                                            id="field1"
                                            label="Field1"
                                            type="text"
                                            value={field1}
                                            onChange={this.handleChange('field1')}
                                            margin="normal"
                                        />
                                        <TextField
                                            required
                                            error={field2Err}
                                            id="field2"
                                            label="Field2"
                                            type="text"
                                            value={field2}
                                            onChange={this.handleChange('field2')}
                                            margin="normal"
                                        />
                                    </div>
                                  
                                    <button onClick={this.handleOK} className="btn btn-lg bg-dark text-white mr-2" >OK</button>
                                    <button onClick={this.handleClose} className="btn btn-lg bg-dark text-white" >Cancel</button>
                                </div>
                            </Modal>}
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        referrals: state.app.referrals,
    };
}

export default connect(mapStateToProps)(Referral);
