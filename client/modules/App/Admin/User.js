import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchUsers, fetchReferrals } from '../AppActions';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';
import { toast } from 'react-toastify';
import { btcQRCode, ltcQRCode, ethQRCode } from '../../../util/util';
import { toReadableDate } from '../../../util/util';
import LTC_ROUNDED from '../../../assets/img/Litecoin.png';
import callApi from '../../../util/apiCaller';

class BSTable extends React.Component {
    IDFormatter = (cell, row) => {
        return cell ? <a href={`http://${window.location.host}/${cell}`} target="_blank"><i className="fa fa-download"></i></a> : ''; 
    }

    dateFormatter = (cell, row) => {
        return cell ? toReadableDate(cell) : cell;
    }

    render() {
      if (this.props.data) {
        return (
          <BootstrapTable data={ this.props.data }>
            <TableHeaderColumn dataField="Email" isKey={ true } width="250">Email</TableHeaderColumn>
            <TableHeaderColumn dataField="FullName">Full Name</TableHeaderColumn>
            <TableHeaderColumn dataField="Birthday" dataFormat={this.dateFormatter}>Birthday</TableHeaderColumn>
            <TableHeaderColumn dataField="Nationality">Nationality</TableHeaderColumn>
            <TableHeaderColumn dataField="Address">Address</TableHeaderColumn>
            <TableHeaderColumn dataField="ID" dataFormat={ this.IDFormatter } width="50">ID</TableHeaderColumn>
          </BootstrapTable>);
      } else {
        return (<p>?</p>);
      }
    }
}

class PayoutForReferral extends Component {
    constructor(props) {
        super(props);
        const selected = [];
        props.data.map(row =>{
            if (row.status != 'referred') {
                selected.push(row._id);
            }
        });
        this.state = {
            selected
        };
        this.proceedPayment = this.proceedPayment.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
    }
  
    dateFormatter = (cell, row) => {
        return cell ? toReadableDate(cell) : cell;
    }

    referredUserFormatter = (cell, row) => {
        return cell.email;
    }

    amountFormatter = (cell, row) => {
        return row.paidTickets * row.btcTicketPrice * this.props.settings.referralPercent / 100;
    }

    proceedPayment = (row) => {
       
    }

    actionFormat = (cell, row) => {
        return <input type="checkbox" onChange={this.proceedPayment(row)} checked={cell !== 'referred'} />
    }

    showQRCode = (row) => {
        const amount = row.paidTickets * row.btcTicketPrice * this.props.settings.referralPercent / 100;
        this.props.handleQRCode(this.props.sender.payoutForReferral, amount);
    }

    btcAddressFormatter = (cell, row) => {
        return <button data-toggle="tooltip" title="BTC Address" type="button" onClick={() => this.showQRCode(row)} className="btn btn-link btn-sm"><i className="fa fa-qrcode fa-2x" aria-hidden="true"></i></button>;
    }

    projectFormatter = (cell, row) => {
        return <button data-toggle="tooltip" title="Project Detail" type="button" onClick={() => browserHistory.push(`admin/projectdetail/${cell}`)} className="btn btn-link btn-sm"><i className="fa fa-info-circle fa-2x" aria-hidden="true"></i></button>;
    }

    onRowSelect(row, isSelected) {
        
        if (row.status === 'referred') {
            this.props.updateReferralRequest(row._id);
            return true;
        } else {
            return false;
        }
    }
    
      onSelectAll(isSelected) {
        if (!isSelected) {
          this.setState({ selected: [] });
        }
        return false;
      }

    render() {
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onRowSelect,
            onSelectAll: this.onSelectAll,
            selected: this.state.selected
          };
        if (this.props.data) {
          return (
            <BootstrapTable 
                data={this.props.data}
                selectRow={selectRowProp}>
              <TableHeaderColumn dataField="_id" isKey hidden >ID</TableHeaderColumn>
              <TableHeaderColumn dataField="referred" dataFormat={this.referredUserFormatter} width="70">Referred User</TableHeaderColumn>
              <TableHeaderColumn dataField="paidTickets" width="70">Paid Tickets</TableHeaderColumn>
              <TableHeaderColumn dataField="paidTickets" dataFormat={this.amountFormatter} width="70">Amount: <i className="fa fa-bitcoin" aria-hidden="true"></i></TableHeaderColumn>
              <TableHeaderColumn dataFormat={this.btcAddressFormatter} dataAlign="center" width="30"><i className="fa fa-bitcoin fa-2x" aria-hidden="true"></i></TableHeaderColumn>
              <TableHeaderColumn dataField="datePaid" dataAlign="center" dataFormat={this.dateFormatter} width="70">Referred Date</TableHeaderColumn>
              <TableHeaderColumn dataField="projectID" dataFormat={this.projectFormatter} width="50">Project</TableHeaderColumn>
            </BootstrapTable>);
        }
        return (<p>?</p>);
      }
}

class RefundRequest extends Component {
    btcAmountFormatter = (cell, row) => {
        return cell.btcChangeAmount;
    }

    ethAmountFormatter = (cell, row) => {
        return cell.ethChangeAmount;
    }

    ltcAmountFormatter = (cell, row) => {
        return cell.ltcChangeAmount;
    }

    dateFormatter = (cell, row) => {
        return cell ? toReadableDate(cell) : cell;
    }

    showQRCode = (type, row) => {
        this.props.handleQRInfo(true, type, row);
    } 

    btcAddressFormatter = (cell, row) => {
        return <button type="button" onClick={() => this.showQRCode('BTC', row)} className="btn btn-link btn-sm"><i className="fa fa-qrcode fa-2x" aria-hidden="true"></i></button>;
    }

    ethAddressFormatter = (cell, row) => {
        return <button type="button" onClick={() => this.showQRCode('ETH', row)} className="btn btn-link btn-sm"><i className="fa fa-qrcode fa-2x" aria-hidden="true"></i></button>;
    }

    ltcAddressFormatter = (cell, row) => {
        return <button type="button" onClick={() => this.showQRCode('LTC', row)} className="btn btn-link btn-sm"><i className="fa fa-qrcode fa-2x" aria-hidden="true"></i></button>;
    }

    render() {
        if (this.props.data) {
          return (
            <BootstrapTable data={this.props.data}>
              <TableHeaderColumn dataField="_id" row="0" rowSpan="1" isKey hidden >ID</TableHeaderColumn>
              <TableHeaderColumn row="0" colSpan="3" headerAlign="center">Amount</TableHeaderColumn>
              <TableHeaderColumn row="1" dataField="orderID" dataFormat={this.btcAmountFormatter} width="70"><i className="fa fa-bitcoin fa-2x" aria-hidden="true"></i></TableHeaderColumn>
              <TableHeaderColumn row="1" dataField="orderID" dataFormat={this.ethAmountFormatter} width="70"><i className="fa fa-ethereum fa-2x" aria-hidden="true"></i></TableHeaderColumn>
              <TableHeaderColumn row="1" dataField="orderID" dataFormat={this.ltcAmountFormatter} width="70"><img src={LTC_ROUNDED} alt="LTC" width="30" height="30" /></TableHeaderColumn>
              <TableHeaderColumn row="0" colSpan="3" headerAlign="center">Address</TableHeaderColumn>
              <TableHeaderColumn row="1" dataField="orderID" dataFormat={this.btcAddressFormatter} dataAlign="center" width="30"><i className="fa fa-bitcoin fa-2x" aria-hidden="true"></i></TableHeaderColumn>
              <TableHeaderColumn row="1" dataField="orderID" dataFormat={this.ethAddressFormatter} dataAlign="center" width="30"><i className="fa fa-ethereum fa-2x" aria-hidden="true"></i></TableHeaderColumn>
              <TableHeaderColumn row="1" dataField="orderID" dataFormat={this.ltcAddressFormatter} dataAlign="center" width="30"><img src={LTC_ROUNDED} alt="LTC" width="30" height="30" /></TableHeaderColumn>
              <TableHeaderColumn row="0" colSpan="1" headerAlign="center"></TableHeaderColumn>
              <TableHeaderColumn row="1" dataField="dateAdded" dataAlign="center" dataFormat={this.dateFormatter} width="70">Date</TableHeaderColumn>
            </BootstrapTable>);
        }
        return (<p>?</p>);
      }
}

function QRModal(props) {
    const { showQRCode, handleQRClose, type, btcAddress, ltcAddress, ethAddress, btcAmount, ltcAmount, ethAmount } = props
    return(
        <Modal
            open={showQRCode}
            onClose={handleQRClose}
            >
            <div className="qr-modal d-flex flex-column align-items-center" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h4 className="text-center fb mb-4">{type}</h4>
                <p><b>Amount: </b>
                    {type == 'BTC' && btcAmount}
                    {type == 'LTC' && ltcAmount}
                    {type == 'ETH' && ethAmount}
                </p>
                <p><b>Address: </b>
                    {type == 'BTC' && btcAddress}
                    {type == 'LTC' && ltcAddress}
                    {type == 'ETH' && ethAddress}
                </p>
                {type == 'BTC' && btcQRCode(btcAddress, btcAmount, 'BTC')}
                {type == 'LTC' && ltcQRCode(ltcAddress, ltcAmount, 'LTC')}
                {type == 'ETH' && ethQRCode(ethAddress, ethAmount)}
            </div>
    </Modal>
    );
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }

        this.updateReferralRequest = this.updateReferralRequest.bind(this);
    }

    componentWillMount(){
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartprojectadmin');
            if (token == null) {
                browserHistory.push('/admin/signin');
            } 
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (this.props.users !== nextProps.users) {
            this.setState({ ...this.state, loading: false });
        }
    }

    displayDetail = (id) => {
        const curUser = this.props.users.filter(user => user._id == id);
        this.setState({ ...this.state, isDetailOpen: true, curUser: curUser[0] });
    }

    actionFormatter = (cell, row) => {
        return <div><button type="button" onClick={() => this.displayDetail(row._id)} className="btn btn-link btn-sm"><i className="fa fa-info-circle fa-2x"></i></button></div>;
    }

    showRefund = (userID) => {
        const filteredRefunds = this.props.refunds.filter(refund => refund.userID._id == userID);
        this.setState({ ...this.state, showRefund: true, filteredRefunds });
    }

    refundFormatter = (cell, row) => {
        let isExisting = this.props.refunds.find(refund => refund.userID._id == cell);
        return isExisting ? <button type="button" onClick={() => this.showRefund(cell)} className="btn btn-link btn-sm" data-toggle="tooltip" title="A list of Refund Requests"><i className="fa fa-money fa-2x" aria-hidden="true"></i></button> : <p></p>;
    }

    showReferral = (userID) => {
        const filteredReferrals = this.props.referralRequests.filter(referralRequest => referralRequest.referralID.sender == userID);
        const sender = this.props.users.find(user => user._id === userID);
        this.setState({ ...this.state, showReferral: true, sender, filteredReferrals });
    }

    referralFormatter = (cell, row) => {
        let isExisting = this.props.referralRequests.find(referralRequest => referralRequest.referralID.sender === cell);
        return isExisting ? <button type="button" onClick={() => this.showReferral(cell)} className="btn btn-link btn-sm" data-toggle="tooltip" title="A list of paid referrals"><i className="fa fa-money fa-2x" aria-hidden="true"></i></button> : <p></p>;
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

    handleClose = () => {
        this.setState({ ...this.state, showRefund: false });
    }

    handleReferralClose = () => {
        this.setState({ ...this.state, showReferral: false });
        this.props.dispatch(fetchUsers());
    }

    handleQRClose = () => {
        this.setState({ ...this.state, showQRCode: false, showReferralQRCode: false });
    }

    handleQRInfo = (showQRCode, type, info) => {
        this.setState({ ...this.state, showQRCode, type, info });
    }

    handleReferralQRCode = (address, amount) => {
        this.setState({ ...this.state, showReferralQRCode: true, referralBTCAddress: address, referralBTCAmount: amount });
    }

    updateReferralRequest(id) {
        const body = {
            id
        };
        callApi('paymentForReferral', 'POST', body).then(res => {
            if (res.errors) {
                console.log(res.errors);
            } else {
              
            }
        });
    }
    
    render() {
        const { users } = this.props;
        const { loading, showRefund, showQRCode, type, info, showReferral, showReferralQRCode, referralBTCAmount, referralBTCAddress } = this.state;
        if (!loading) {
            users.map(user => {
                user.dateAdded = toReadableDate(user.dateAdded);
                user.expand = [{
                    Email: user.email,
                    FullName: user.fullName,
                    Birthday: user.birthday,
                    Nationality: user.nationality,
                    Address: user.address,
                    Phone: user.phone,
                    ID: user.ID,
                }];
            });
        }

        return (
            <div>
                <AdminHeader />
                <div className="container container-option">
                    <h1>Users Page</h1>
                    {loading && <div>loading...</div>}
                    {!loading && <div>
                        <BootstrapTable 
                            data={users}
                            expandableRow={this.isExpandableRow}
                            expandComponent={this.expandComponent}
                            expandColumnOptions={{
                                expandColumnVisible: true,
                                expandColumnComponent: this.expandColumnComponent,
                                columnWidth: 50
                            }}
                            striped={true}
                            hover={true}
                            pagination
                            options={{ paginationShowsTotal: true, expandBy: 'column' }}>
                            <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="email" dataSort={true}>Email</TableHeaderColumn>
                            <TableHeaderColumn dataField="role" dataSort={true}>Role</TableHeaderColumn>
                            <TableHeaderColumn dataField="dateAdded">Registered Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="_id" expandable={false} dataFormat={this.refundFormatter} width="100" dataAlign="center">Refunds</TableHeaderColumn>
                            <TableHeaderColumn dataField="_id" expandable={false} dataFormat={this.referralFormatter} width="100" dataAlign="center">Referrals</TableHeaderColumn>     
                        </BootstrapTable>
                        {showRefund && <Modal
                                aria-labelledby="transfer-ticket"
                                aria-describedby="transfer-ticket-description"
                                open={showRefund}
                                onClose={this.handleClose}
                                >
                                <div className="myModal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <h3 className="mb-3">
                                        Available Refund Requests.
                                    </h3>
                                    <RefundRequest 
                                        data={this.state.filteredRefunds}
                                        handleQRInfo={this.handleQRInfo} />
                                </div>
                            </Modal>}
                        {showReferral && <Modal
                                open={showReferral}
                                onClose={this.handleReferralClose}
                                >
                                <div className="myModal" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <h3 className="mb-3">
                                        Available Referral Payment Requests.
                                    </h3>
                                    <PayoutForReferral
                                        sender={this.state.sender}
                                        referrals={this.props.referrals}
                                        settings={this.props.settings}
                                        data={this.state.filteredReferrals}
                                        updateReferralRequest={this.updateReferralRequest}
                                        handleQRCode={this.handleReferralQRCode} />
                                </div>
                            </Modal>}
                        {showQRCode && <QRModal
                            showQRCode={showQRCode}
                            handleQRClose={this.handleQRClose}
                            type={type}
                            btcAmount={info.orderID.btcChangeAmount}
                            ltcAmount={info.orderID.ltcChangeAmount}
                            ethAmount={info.orderID.ethChangeAmount}
                            btcAddress={info.orderID.btcAddress}
                            ltcAddress={info.orderID.ltcAddress}
                            ethAddress={info.orderID.ethAddress}
                         />}   
                         {showReferralQRCode && <QRModal
                            showQRCode={showReferralQRCode}
                            handleQRClose={this.handleQRClose}
                            type="BTC"
                            btcAmount={referralBTCAmount}
                            btcAddress={referralBTCAddress}
                         />}        
                    </div>}
                </div>
                <Footer />
            </div>
        );
    }
}

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
    // intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    users: state.app.users,
    refunds: state.app.refunds,
    settings: state.app.settings,
    referralRequests: state.app.referralRequests,
  };
}

export default connect(mapStateToProps)(User);
