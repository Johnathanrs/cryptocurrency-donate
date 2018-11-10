import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import StepZilla from 'react-stepzilla';
import { browserHistory } from 'react-router';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import Clipboard from 'react-clipboard.js';
import Footer from '../components/Footer/Footer';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { toast } from 'react-toastify';
import callApi from '../../../util/apiCaller';
import { toReadableDate } from '../../../util/util';
import { fetchReferrals, fetchProjects, fetchUser } from '../AppActions';
import moment from 'moment';
import _ from 'lodash';

class Step1 extends React.Component {
    isValidated() {
        return !this.props.emailErr && !this.props.messageErr;
    }

    render() {
        const { emailErr, email, handleChange } = this.props;
        return <div className="d-flex flex-column mx-2 mt-5 mb-2">
            <TextField
                required
                error={emailErr}
                id="email"
                className="textField w-20rem"
                label="Email"
                type="email"
                value={email}
                onChange={handleChange('email')}
                margin="normal"
            />
        </div>
    }
}

class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
    }

    isValidated() {
        return this.state.id;
    }

    dateFormatter = (cell, row) => {
        return cell ? toReadableDate(cell) : cell;
    }

    durationFormatter = (cell, row) => {
        const a = moment(cell, 'YYYY-MM-DD');
        const b = moment().format('YYYY-MM-DD');
        const days = a.diff(b, 'days');
        return days;
    }

    donorsFormatter = (cell, row) => {
        const actualDonors = cell.map(donor => { return donor._id; });
        const donors = actualDonors.filter((item, index) => {
            return actualDonors.indexOf(item) >= index;
        });
        return donors.length;
    }

    onRowSelect = (row, isSelected, e) => {
        this.props.handleProject(row._id);
        this.setState({ ...this.state, id: row._id });
    }

    render() {
        return (
            <div className="mt-5 mb-5">
                {!this.state.id && <div className="warning-color mb-2"><i className="fa fa-warning mr-2"></i>Please select a project</div>}
                <BootstrapTable 
                    data={this.props.data}
                    striped
                    hover
                    pagination
                    selectRow={{ mode: 'radio', clickToSelect: true, onSelect: this.onRowSelect }}
                    options={{ paginationShowsTotal: true }} >
                    <TableHeaderColumn dataField="title" dataSort>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="maximumAvailableTickets" dataSort>Max Available Tickets</TableHeaderColumn>
                    <TableHeaderColumn dataField="totalMoneyInBTC" >Total (BTC)</TableHeaderColumn>
                    <TableHeaderColumn dataField="donors" dataSort width="80" dataFormat={this.donorsFormatter}>Donors</TableHeaderColumn>
                    <TableHeaderColumn dataField="fundingDuration" width="100" dataFormat={this.durationFormatter}>Duration (Days)</TableHeaderColumn>
                    <TableHeaderColumn dataField="dateAdded" width="130" dataFormat={this.dateFormatter}>Start Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="_id" hidden isKey dataAlign="center" dataFormat={this.actionFormatter} export={false} width='120'></TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

function Step3({ referralLink }) {
    return <div className="mt-4" style={{ maxWidth: '500px' }}>
        <div style={{ maxWidth: '500px', wordWrap: 'break-word' }}>{referralLink}
        {/* <Clipboard data-toggle="tooltip" title="Copy to Clipboard" onClick={() => toast.warn('Copy to Clipboard')} data-clipboard-text={referralLink}>
                        <i className="fa fa-clipboard"></i>
                    </Clipboard> */}
        </div>
    </div>
}

class Referral extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            showModal: false,
            showReferralLink: false,
            step: 0,
            link: '',
            email: '',
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
        this.props.dispatch(fetchProjects());
        this.props.dispatch(fetchUser());
    }

    componentWillReceiveProps(nextProps) {
        const { invite } = nextProps.params;
        if (this.props.referrals != nextProps.referrals) {
            this.setState({ ...this.state, loading: false, invite });
        }

        if (nextProps.res && this.props.res != nextProps.res) {
            this.setState({ ...this.state, loading: false, payout: nextProps.res.user.payoutForReferral, invite });
        }

        this.setState({ ...this.state, loading: false, invite });
    }

    showModal = () => {
        if (!this.state.payout) {
            this.setState({ ...this.state, payoutErr: true });
            return;
        }

        this.setState({ ...this.state, showModal: true });
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.value, [name+'Err']: !event.target.value });
    }

    handleClose = () => {
        this.setState({ ...this.state, showModal: false });
    }

    handleReferralClose = () => {
        this.setState({ ...this.state, showReferralLink: false });
    }

    handleProject = (projectID) => {
        this.setState({ ...this.state, projectID });
    }

    handleStep = (step) => {
        this.setState({ ...this.state, step });
        if (this.state.invite && step === 2) {
            this.addNewReferral();
        }
        if (step === 1) {
            this.addNewReferral();
        }
    }

    addNewReferral = () => {
        const body = {
            field1: this.state.field1,
            field2: this.state.field2,
            payout: this.state.payout,
            projectID: this.state.projectID,
        };

        if (this.state.invite) {
            body.receiver =  this.state.email;
        }

        callApi('addNewReferral', 'POST', body).then(res => {
            if (res.errors) {
                toast.warn(res.errors);
            } else if (res.status == 'OK') {
                console.log(res);
                toast.warn('Successfully Created');
                this.setState({ ...this.state, referralLink: res.link });
                this.props.dispatch(fetchReferrals());
            }
        });
    }

    dateFormatter = (cell, row) => {
        return <div>{toReadableDate(cell)}</div>;
    }

    checkFormatter = (cell, row) => {
        return <input type="checkbox" checked={cell} />;
    }

    amountCheckFormatter = (cell, row) => {
        return <input type="checkbox" checked={cell > 0} />;
    }

    detailProject = (id) => {
        browserHistory.push(`${id}`);
    }

    showLink = (referralLink) => {
        this.setState({ ...this.state, showReferralLink: true, referralLink: referralLink });
    }

    projectDetailFormatter = (cell, row) => {
        let referralLink = `http://smartprojects.tech/referral/${row.projectID}/${row._id}`;
        if (row.receiver) {
            referralLink += `/${row.receiver}`;
        }
        return (
            <div>
                <button type="button" data-toggle="tooltip" title="Go to the Project" onClick={() => this.detailProject(cell)} className="btn btn-link btn-sm"><i className="fa fa-edit fa-2x"></i></button>
                <button type="button" data-toggle="tooltip" title="Show Link" onClick={() => this.showLink(referralLink)} className="btn btn-link btn-sm"><i className="fa fa-info-circle fa-2x"></i></button>
            </div>
        )
    }

    onExportToCSV = () => {
        const exportData = [];
        this.props.referrals.map(referral => {
            referral.dateAdded = toReadableDate(referral.dateAdded);
            referral.dateReferred = referral.dateReferred ? toReadableDate(referral.dateReferred) : '';
            exportData.push(referral);
        });
        return exportData;
    }

    render() {
        const { loading, showModal, field1, field2, payout, payoutErr, email, emailErr, message, messageErr, showReferralLink, referralLink, invite } = this.state;
        let { referrals } = this.props;

        let steps = [
          { name: 'Select Project', component: <Step2 data={this.props.projects} handleProject={this.handleProject}/> },
          { name: 'Final', component: <Step3 referralLink={this.state.referralLink} /> },
        ];

        if (invite) {
            steps = [
                { name: 'Input Email', component: <Step1 email={email} emailErr={emailErr} message={message} messageErr={messageErr} handleChange={this.handleChange} /> },
                { name: 'Select Project', component: <Step2 data={this.props.projects} handleProject={this.handleProject} /> },
                { name: 'Final', component: <Step3 referralLink={this.state.referralLink} /> },
            ];
            referrals = _.filter(referrals, function(o) { return o.receiver; });
        }

        return(
            <div>
                <AuthHeader />
                <div className="container container-option">
                    {loading && <div>...loading</div>}
                    {!loading && <div>
                        <div className="d-flex">
                            <h1 style={{ flexGrow: 1 }}> {invite ? 'Invite Page' : 'Referral Page'}</h1>
                            <button type="button" onClick={this.showModal} className="btn btn-large btn-link"><i className="fa fa-plus"></i>Add New</button>
                        </div>
                        <div className="row mx-2 mb-2">
                            <TextField
                                id="field1"
                                label="Field1"
                                className="textField w-20rem mr-2"
                                type="text"
                                value={field1}
                                onChange={this.handleChange('field1')}
                            />
                            <TextField
                                id="field2"
                                label="Field2"
                                className="textField w-20rem mr-1"
                                type="text"
                                value={field2}
                                onChange={this.handleChange('field2')}
                            />
                        </div>
                        <div className="row mx-2 mb-2">
                            <TextField
                                required
                                error={payoutErr}
                                id="payout"
                                label="Payout(BTC)"
                                className="textField w-20rem mr-2"
                                type="text"
                                value={payout}
                                onChange={this.handleChange('payout')}
                            />
                        </div>
                        <BootstrapTable
                            exportCSV
                            data={referrals}
                            striped
                            hover
                            pagination
                            options={{ onExportToCSV: this.onExportToCSV, paginationShowsTotal: true }}>
                            <TableHeaderColumn dataField="_id" isKey hidden dataAlign="center" dataSort >Referral ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="isReferred" dataFormat={this.checkFormatter} dataAlign="center">Referred</TableHeaderColumn>
                            <TableHeaderColumn dataField="paidAmount" dataFormat={this.amountCheckFormatter} dataAlign="center">Paid</TableHeaderColumn>
                            <TableHeaderColumn dataField="field1" dataSort >Field 1</TableHeaderColumn>
                            <TableHeaderColumn dataField="field2" dataSort >Field 2</TableHeaderColumn>
                            <TableHeaderColumn dataField="paidAmount" dataSort >Profit(<i className="fa fa-bitcoin" aria-hidden="true"></i>)</TableHeaderColumn>
                            <TableHeaderColumn dataField="dateAdded" dataAlign="center" dataFormat={this.dateFormatter} >Create Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="dateReferred" dataAlign="center" dataFormat={this.dateFormatter} >Referred Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="projectID" dataAlign="center" dataFormat={this.projectDetailFormatter} width="100">Action</TableHeaderColumn>
                        </BootstrapTable>
                    </div>}
                    {showModal && <Modal
                                open={showModal}
                                onClose={this.handleClose}
                                >
                                <div className="myModal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <Typography variant="h5" id="modal-title">
                                        Create New Referral Link.
                                    </Typography>
                                    <StepZilla
                                        steps={steps}
                                        showNavigation={true}
                                        prevBtnOnLastStep={false}
                                        preventEnterSubmission={true}
                                        nextTextOnFinalActionStep="Create"
                                        startAtStep={this.state.step}
                                        onStepChange={(step) => this.handleStep(step)}
                                    />
                                </div>
                            </Modal>}
                            {showReferralLink && <Modal 
                                   open={showReferralLink}
                                    onClose={this.handleReferralClose} >
                                    <div className="qr-modal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <Step3 referralLink={referralLink} />
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
        projects: state.app.projects,
        res: state.app.res,
    };
}

export default connect(mapStateToProps)(Referral);
