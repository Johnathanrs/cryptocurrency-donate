import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import StepZilla from 'react-stepzilla';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { toast } from 'react-toastify';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';

import callApi from '../../../util/apiCaller';
import { toReadableDate } from '../../../util/util';
import { fetchReferrals, fetchProjects, fetchUser, fetchOrdersForReferral, fetchSettings } from '../AppActions';
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
            ids: []
        };
    }

    isValidated() {
        return this.state.ids.length;
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
        const ids = this.state.ids;
        const id = row._id;
        if (_.find(ids, id)) {
            _.remove(ids, id);
        } else {
            ids.push(id);
        }
        this.setState({ ...this.state, ids });
        this.props.handleProject(ids);
    }

    onSelectAll = (isSelected, rows) => {
        const ids = [];
        if (isSelected) {
            for (let i = 0; i < rows.length; i++) {
                ids.push(rows[i]._id);
            }
        } 
        this.setState({ ...this.state, ids });
        this.props.handleProject(ids);
    }

    render() {
        return (
            <div className="mt-5 mb-5">
                {!this.state.ids.length && <div className="warning-color mb-2"><i className="fa fa-warning mr-2"></i>Please select your preferred projects</div>}
                <BootstrapTable 
                    data={this.props.data}
                    striped
                    hover
                    pagination
                    selectRow={{ mode: 'checkbox', clickToSelect: true, onSelect: this.onRowSelect, onSelectAll: this.onSelectAll }}
                    options={{ paginationShowsTotal: true }} >
                    <TableHeaderColumn dataField="title" dataSort>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="maximumAvailableTickets" dataSort>Max Available Tickets</TableHeaderColumn>
                    <TableHeaderColumn dataField="totalMoneyInBTC" >Total:<i className="fa fa-bitcoin"></i></TableHeaderColumn>
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
    return  <div className="mt-4">
                <h4>Copy your link and spread the word by sharing it.</h4>
                { referralLink && referralLink.map(link => {
                    return (<div>
                        <div style={{ maxWidth: '100%', wordWrap: 'break-word', display: 'inline-block' }}>
                            {link}
                        </div>
                        <CopyToClipboard text={link}
                            onCopy={() => toast.warn('Copy to Clipboard')}>
                                <button data-toggle="tooltip" title="Copy to Clipboard"><i className="fa fa-clipboard"></i></button>
                        </CopyToClipboard>
                    </div>)
                })}
            </div>
}

class BSTable extends React.Component {
    dateFormatter = (cell, row) => {
        return cell ? toReadableDate(cell) : cell;
    }

    render() {
      if (this.props.data) {
        return (
          <BootstrapTable data={ this.props.data }>
            <TableHeaderColumn dataField="title" isKey={ true } >Title</TableHeaderColumn>
            <TableHeaderColumn dataField="referralID" width="230">ID</TableHeaderColumn>
            <TableHeaderColumn dataField="referrals" dataSort>Referrals</TableHeaderColumn>
            <TableHeaderColumn dataField="paidAmount" dataSort><i className="fa fa-bitcoin"></i></TableHeaderColumn>
          </BootstrapTable>
          );
      } else {
        return (<p>?</p>);
      }
    }
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

    handleProject = (ids) => {
        this.setState({ ...this.state, ids });
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
            ids: this.state.ids,
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
                this.setState({ ...this.state, referralLink: res.links });
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
        const { referralRequests } = this.props;
        const filtered = referralRequests.filter(request => request.referralID == row._id);
        // filtered.map(each => {

        // });
        return <input type="checkbox" checked={cell > 0} />;
    }

    detailProject = (id) => {
        browserHistory.push(`${id}`);
    }

    showLink = (referralLink) => {
        this.setState({ ...this.state, showReferralLink: true, referralLink: [referralLink] });
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
        this.props.referrals && this.props.referrals.map(referral => {
            referral.dateAdded = toReadableDate(referral.dateAdded);
            referral.dateReferred = referral.dateReferred ? toReadableDate(referral.dateReferred) : '';
            exportData.push(referral);
        });
        return exportData;
    }

    remakeReferralRequests = () => {
        const newReferralRequests = [];
        const { referralRequests } = this.props;
        if (referralRequests) {
            referralRequests.map(referralRequest => {
                const amount = referralRequest.paidTickets * referralRequest.btcTicketPrice * this.props.settings.referralPercent / 100;
                const newRequest = referralRequest.referralID && {
                    title: referralRequest.projectID.title,
                    referred: referralRequest.referred,
                    referralID: referralRequest.referralID._id,
                    referrals: 1,
                    paidAmount: amount,
                } || { paidAmount: 0, referrals: 0 };
                const oldOrder = newReferralRequests.find(each => each.referralID === referralRequest.referralID._id);
                if (oldOrder) {
                    if (oldOrder.referred !== newRequest.referred) {
                        newRequest.referrals++;
                    }
                    newRequest.paidAmount += oldOrder.paidAmount;
                }
                newReferralRequests.push(newRequest);
            });
        }
        return newReferralRequests;
    }
    
    isExpandableRow(row) {
        return true;
    }

    expandComponent(row) {
        return (
          <BSTable data={ row.expand } />
        );
      }
    
    expandColumnComponent({ isExpanded }) {
        let content = '';
    
        content = (isExpanded ? '(-)' : '(+)');
        return (
          <div> { content } </div>
        );
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

        if (referrals) {
            const newReferralRequests= this.remakeReferralRequests();
            referrals.map(referral => {
                const expands = newReferralRequests.find(request => request.referralID == referral._id) || [];
                // const _expands = expands[0] && expands[0] || [];
                referral.expand = [
                    expands
                ];
                let amount = 0;
                // expands.map(expand => {
                //     amount += expand.paidAmount;
                // });
                referral.paidAmount = amount;
            });
        }

        return(
            <div>
                <AuthHeader />
                <div className="container container-option">
                    {loading && <div>...loading</div>}
                    {!loading && referrals && <div>
                        <div className="mb-5">
                            <h1> {invite && 'Invite Page'}</h1>
                            {!invite && <h2>Become our partner and join a referral program where attractive commissions can easily be earned.</h2>}
                        </div>
                        <div className="card card-body mb-4">
                            <h5>Set a BTC payout address and start by adding a referral link:</h5>
                            <div className="mx-2 mb-2">
                                <div className="form-group ">
                                    <div className="row input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">Payout ( BTC )* </span>
                                        </div>
                                        <div className="col-7">
                                            <input type="text" value={payout} onChange={this.handleChange('payout')} className="form-control" aria-describedby="basic-addon3" />
                                        {payoutErr && <div className="invalid-feedback d-block">Payout cannot be blank.</div>} 
                                        </div>
                                        <button type="button" onClick={this.showModal} className="col-3 btn btn-large btn-link"><i className="fa fa-plus"></i>Add Referral Link</button>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-link text-warning " type="button" data-toggle="collapse" data-target="#advanced" aria-expanded="false" aria-controls="advanced">
                                Advanced >>
                            </button>
                            <div className="collapse" id="advanced">
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
                            </div>
                        </div>
                        
                        <div className="card card-body">
                            <p>
                                You will round-up your earnings each time a referral buys a ticket by using your affiliate link. Use each of your created links by copying it from the info button below.
                            </p>
                            <p>
                                For each sold ticket you will earn 5% of the ticket price in BTC for free.
                            </p>
                            <p>
                                Enjoy fast lane payouts within two business days.
                            </p>
                            <BootstrapTable
                                exportCSV
                                data={referrals}
                                expandableRow={this.isExpandableRow}
                                expandComponent={this.expandComponent}
                                expandColumnOptions={{
                                    expandColumnVisible: true,
                                    expandColumnComponent: this.expandColumnComponent,
                                    columnWidth: 50
                                }}
                                striped
                                hover
                                pagination
                                options={{ onExportToCSV: this.onExportToCSV, paginationShowsTotal: true, expandBy: 'column' }}>
                                <TableHeaderColumn dataField="_id" isKey hidden dataAlign="center" dataSort >Referral ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="isReferred" dataFormat={this.checkFormatter} dataAlign="center">Referred</TableHeaderColumn>
                                <TableHeaderColumn dataField="paidAmount" dataFormat={this.amountCheckFormatter} dataAlign="center">Paid</TableHeaderColumn>
                                <TableHeaderColumn dataField="field1" dataSort >Field 1</TableHeaderColumn>
                                <TableHeaderColumn dataField="field2" dataSort >Field 2</TableHeaderColumn>
                                <TableHeaderColumn dataField="paidAmount" dataSort >Profit(<i className="fa fa-bitcoin" aria-hidden="true"></i>)</TableHeaderColumn>
                                <TableHeaderColumn dataField="dateAdded" dataAlign="center" dataFormat={this.dateFormatter} dataSort>Create Date</TableHeaderColumn>
                                <TableHeaderColumn dataField="dateReferred" dataAlign="center" dataFormat={this.dateFormatter} dataSort>Referred Date</TableHeaderColumn>
                                <TableHeaderColumn dataField="projectID" dataAlign="center" dataFormat={this.projectDetailFormatter} width="150">Action</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>}
                    {showModal && <Modal
                                open={showModal}
                                onClose={this.handleClose}
                                >
                                <div className="myModal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <Typography variant="h5" id="modal-title">
                                        Create Referral Link.
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
        referralRequests: state.app.referralRequests,
        settings: state.app.settings,
    };
}

export default connect(mapStateToProps)(Referral);
