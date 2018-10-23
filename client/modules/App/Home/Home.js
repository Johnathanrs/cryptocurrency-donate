import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';

import moment from 'moment';
import { fetchProject } from '../AppActions';
import { saveToken } from '../AuthActions';
import callApi from '../../../util/apiCaller';

import BTC_ROUNDED from '../../../assets/img/BTC_yellow.png';
import ETH_ROUNDED from '../../../assets/img/ETH_color.png';
import LTC_ROUNDED from '../../../assets/img/LTC_yellow.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProjectView from './ProjectView';
import TicketControl from './TicketControl';
import UserRegister from '../UserRegister';
import Payment from './Payment';
import Thankyou from './Thankyou';
import Featured from './Featured';

const coinTypeArray = {
    BTC: BTC_ROUNDED,
    ETH: ETH_ROUNDED,
    LTC: LTC_ROUNDED,
};

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            token: '',
            activePage: 'home',
            activePane: 'Thumb',
            tickets: 4,
            ticketPrice: {
                BTC: 0.008,
                ETH: 0.08,
                LTC: 0.8,
            },
            totalPrice: {
                BTC: 0.008,
                ETH: 0.08,
                LTC: 0.8,
            },
            donationPower: 50,
            coinType: 'BTC',
            donationShare: 400,
            project: {},
            remainingDays: '',
            email: '',
            terms_cond: '',
            offers_email: '',
            crypto: {
                BTC: {
                    address: '',
                },
            },
        };
    }

    componentWillUnmount() {
        this.clearBalanceInterval();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.project !== nextProps.res.project) {
            const project = nextProps.res.project;
            if (!project) this.setState({ loading: false });
            let a = moment(project.fundingDuration, 'YYYY-MM-DD');
            let b = moment().format('YYYY-MM-DD');
            var days = a.diff(b, 'days');
            var donationShare = parseFloat((project.totalTickets / this.state.tickets).toFixed(1));
            const ticketPrice = {
                BTC: project.ticketPriceInBTC,
                ETH: project.ticketPriceInETH,
                LTC: project.ticketPriceInLTC,
            };
            const totalPrice = {
                BTC: (parseFloat((this.state.tickets * project.ticketPriceInBTC).toFixed(8))).toString(),
                ETH: (parseFloat((this.state.tickets * project.ticketPriceInETH).toFixed(8))).toString(),
                LTC: (parseFloat((this.state.tickets * project.ticketPriceInLTC).toFixed(8))).toString(),
            }
            this.setState({ ...this.state, project: project, ticketPrice: ticketPrice, totalPrice: totalPrice, remainingDays:days, donationShare: donationShare.toString(), loading: false });
        }

        if (this.props.token !== nextProps.token && !nextProps.token) {
            toast.warn('Log out');
        }
    }

    componentDidMount() {
        let id = undefined;
        if (this.props.params.id) {
            id = this.props.params.id;
        }
        this.props.dispatch(fetchProject(id));
    }
    
    handleTickets = (event, value) => {
        const totalPrice = this.state.totalPrice;
        totalPrice[this.state.coinType] = (parseFloat((value * this.state.ticketPrice[this.state.coinType]).toFixed(8))).toString();
        var _value = value === 0 ? 1 : value;
        var donationShare = parseFloat((this.state.project.totalTickets / _value).toFixed(1));
        let donationPower = value === 0 ? 0 : this.state.donationPower;
        this.setState({ ...this.state, tickets: value, donationPower: donationPower, donationShare: donationShare.toString(), totalPrice: totalPrice });
    };

    handlePower = (event, value) => {
        this.setState({ ...this.state, donationPower: value });
    };

    handleCoinType = event => {
        const type = event.target.alt;
        const totalPrice = this.state.totalPrice;
        totalPrice[type] = (parseFloat((this.state.tickets * this.state.ticketPrice[type]).toFixed(8))).toString();
        
        this.setState({ ...this.state, coinType: type, totalPrice: totalPrice });
    }

    getNow = () => {
        const body = {
            ticket: {
                projectID: this.state.project._id,
                totalTickets: this.state.tickets,
                totalPrice: this.state.totalPrice,
                ticketPrice: this.state.ticketPrice,
            },
        };
        callApi('users/getNow', 'POST', body).then(res => {
            if (res.errors) {
                
                toast.warn(res.errors);
            } else {
                console.log(res);
                if (res.status == 'authorized') {
                    this.setState({ ...this.state,
                        orderID: res.id,
                        crypto: res.crypto,
                        isRegistering: false,
                        activePage: 'payment',
                    }, () => {
                        this.startBalanceInterval();
                    });
                    this.props.dispatch(saveToken(res.token));
                } else if (res.status == 'unauthorized') {
                    this.setState({
                        ...this.state,
                        home: false,
                        activePage: 'userRegister',
                    });
                }
            }
        });
    }

    gotoNext = () => {
        if (!this.state.email) {
            toast.warn('Please subscribe to Smartprojects.tech to donate!');
            return;
        }

        if (!this.state.terms_cond) {
            toast.warn('Please read and accept terms and conditions.');
            return;
        }

        if (!this.state.offers_email) {
            toast.warn('Please agree to receive offers and emails from SmartProjects.tech.');
            return;
        }

        this.setState({ ...this.state,
            isRegistering: true,
        });

        const body = {
            user: { email: this.state.email },
            ticket: {
                projectID: this.state.project._id,
                totalTickets: this.state.tickets,
                totalPrice: this.state.totalPrice,
                ticketPrice: this.state.ticketPrice,
            },
        };

        callApi('users/userSignup', 'POST', body).then((res, err) => {
            let message = 'Successfully authenticated';
            if  (res.errors) {
                
                toast.warn(res.errors);
            } else {
                localStorage.setItem('smartproject', JSON.stringify({ email: res.email, token: res.token, isSignIn: false }));
                if (res.isNewUser && res.isMsgSent) {
                    message = 'Successfully sent your personal credential!';
                } else {
                    message = 'You are automatically signed in';
                }
                
                toast.warn(message);
                this.setState({ ...this.state,
                    message,
                    crypto: res.crypto,
                    orderID: res.id,
                    activePage: 'payment',
                    token: res.token,
                }, () => {
                   this.startBalanceInterval();
                });
                this.props.dispatch(saveToken(res.token));
            }
        });
    }

    handleCheck = name => event => {
        this.setState({
            ...this.state,
            [name]: event.target.checked,
        });
    }

    handleChange = name => event => {
        this.setState({
            ...this.state,
            [name]: event.target.value,
        });
    };

    goBack = () => {
        this.setState({ ...this.state, activePage: 'home' });
    }

    gotoHome = (id) => {
        browserHistory.push(`/${id}`);
    }

    manageBalanceResponse = (res) => {
        if (this.state.activePage != 'payment') {
            return;
        }
        console.log('balance', res);
        let message = '';
        if(res.errors) {
            toast.warn(res.errors);
            return;
        } else if (res.status == 'ok') {
            // stop scheduling and go to the thank you page
            console.log(' got payment ');
            message = `You paid ${res.paidAmount} ${this.state.coinType} for ${res.paidTickets} out of ${this.state.tickets}`;
            this.setState({ ...this.state,
                activePage: 'thankyou',
                message: message,
                paidAmount: res.paidAmount,
                paidTickets: res.paidTickets,
                coinType: res.paidCoin,
                project: {
                    ...this.state.project,
                    maximumAvailableTickets: res.maximumAvailableTickets,
                }
            });
            toast.warn(message);
            clearInterval(this.balanceBTCInterval);
            clearInterval(this.balanceLTCInterval);
            return;
        } else if (res.status == 'less') {
            message = `We got only ${res.amount}. \n which does not reach the 1 ticket out of ${this.state.tickets}`;
            toast.warn(message);
        } else {
            console.log(' still wait for a payment ');
        }
    }

    balanceBody = () => {
        return {
            orderID: this.state.orderID,
        };
    }

    startBalanceInterval = () => {
        this.balanceInterval =  setInterval( () => { this.checkBalance(); }, 30000);
    }

    clearBalanceInterval = () => {
        clearInterval(this.balanceInterval);
    }

    checkBalance = () => {
        if (!this.state.crypto || this.state.activePage != 'payment') {
            // console.log('clearInterval ', addr);
            this.clearBalanceInterval();
            return;
        }
        console.log('timer Balance');
        const body = this.balanceBody();
        callApi('users/checkBalance', 'POST', body).then((res, err) => {
            this.manageBalanceResponse(res);
        });
    }

    toggleDetail = (type) => {
        this.setState({
            ...this.state,
            activePane: this.state.activePane == type ? 'Thumb' : type,
        });
    }

    getEmail = () => {
        const tokenData = localStorage.getItem('smartproject');
        let email = '';
        if (tokenData) {
            try {
                email = JSON.parse(tokenData).email;
            } catch(err) {
                console.log(err);
            }
        }
        return email;
    }

    render() {
        const { project, activePage, activePane, loading, remainingDays } = this.state;
        const { res } = this.props;

       return (
            <div>
                <Header activePage={activePage} />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                { !loading &&
                    <div>
                        <div className="row">
                            <ProjectView 
                                project={project}
                                remainingDays={remainingDays}
                                activePane={activePane}
                                toggleDetail={this.toggleDetail}
                                featuredProjects={res.featuredProjects}
                                />
                            {
                                activePage == 'home' && <TicketControl 
                                                        email={this.getEmail}
                                                        coinTypeArray={coinTypeArray}
                                                        coinType={this.state.coinType}
                                                        tickets={this.state.tickets}
                                                        totalPrice={this.state.totalPrice}
                                                        ticketPrice={this.state.ticketPrice}
                                                        donationShare={this.state.donationShare}
                                                        donationPower={this.state.donationPower}
                                                        handlePower={this.handlePower}
                                                        handleCoinType={this.handleCoinType}
                                                        handleTickets={this.handleTickets}
                                                        getNow={this.getNow}
                                                        project={this.state.project}
                                                    />
                            }
                            {
                                activePage == 'userRegister' && <UserRegister 
                                                                coinTypeArray={coinTypeArray}
                                                                coinType={this.state.coinType}
                                                                tickets={this.state.tickets}
                                                                totalPrice={this.state.totalPrice}
                                                                handleCoinType={this.handleCoinType}
                                                                project={project}
                                                                email={this.state.email}
                                                                handleChange={this.handleChange}
                                                                handleCheck={this.handleCheck}
                                                                offers_email={this.state.offers_email}
                                                                terms_cond={this.state.terms_cond}
                                                                goBack={this.goBack}
                                                                gotoNext={this.gotoNext}
                                                                isRegistering={this.state.isRegistering}
                                                            />
                            }
                            {
                                activePage == 'payment' && <Payment
                                                        email={this.getEmail}
                                                        coinTypeArray={coinTypeArray}
                                                        coinType={this.state.coinType}
                                                        tickets={this.state.tickets}
                                                        totalPrice={this.state.totalPrice}
                                                        handleCoinType={this.handleCoinType}
                                                        project={project}
                                                        crypto={this.state.crypto}
                                                        ticketPrice={this.state.ticketPrice}
                                                        />
                            }

                            {
                                activePage == 'thankyou' && <Thankyou
                                                        email={this.getEmail}
                                                        coinTypeArray={coinTypeArray}
                                                        coinType={this.state.coinType}
                                                        tickets={this.state.paidTickets}
                                                        totalPrice={this.state.paidAmount}
                                                        project={project}
                                                        ticketPrice={this.state.ticketPrice}
                                                        />
                            }
                        </div>
                    </div>
                }
                {
                    this.state.loading && <div> loading.... </div>
                }
            </div>
            <Footer />
        </div>
       );
    }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
    // intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    res: state.app.res,
    token: state.auth.token,
  };
}

export default connect(mapStateToProps)(Home);
