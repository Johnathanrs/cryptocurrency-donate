import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

import BTC_ROUNDED from '../../../assets/img/BTC_yellow.png';
import ETH_ROUNDED from '../../../assets/img/ETH_color.png';
import LTC_ROUNDED from '../../../assets/img/LTC_yellow.png';

import '../../../assets/css/cards_gallery.css';

import { fetchProject } from '../AppActions';

class ProjectDetailView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchProject(this.props.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.res !== nextProps.res) {
            const project = nextProps.res.project;
            this.setState({ ...this.state, loading: false });
        }
    }

    updateProject = () => {
        browserHistory.push(`/admin/project/${this.props.res.project._id}`)
    }

    gotoHome = () => {
        browserHistory.push(`/${this.props.res.project._id}`)
    }
    
    render() {
        const { res } = this.props;
        console.log(this.props);
        let daysLeft = 0;
        let thumbnail = '';
        if (res && res.project) {
            let a = moment(res.project.fundingDuration, 'YYYY-MM-DD');
            let b = moment().format('YYYY-MM-DD');
            daysLeft = a.diff(b, 'days');
            thumbnail = 'http://' +  window.location.host + '/' + res.project.projectThumbnail;
        }
        return (
            <div className="container container-option">
                <AdminHeader />
                {this.state.loading && <div>...loading</div>}
                {!this.state.loading && <div> 
                    <div className="row">
                        <button className="btn btn-lg bg-warning text-white float-right" onClick={this.updateProject}>Update</button>
                    </div>
                    <div className="card border-0 transform-on-hover">
                        <div className="card-img-container">
                            <a href="javascript:void(0)" onClik={() => this.gotoHome()}>
                                <img className="card-img-top" src={thumbnail} alt={res.project.title} />
                            </a>
                            <a href="javascript:void(0)" className="btn btn-info btn-link top-left bg-dard" data-toggle="tooltip" title="Location">
                                <span className="align-middle">{res.project.address && res.project.address.city}</span>
                                <i className="fa fa-map-marker fa-2x align-middle warning-color" aria-hidden="true"></i>
                            </a>
                            <div className="bottom-left bg-dark px-1">
                                <span>$&nbsp;{res.project.totalMoneyInUSD}</span>&nbsp;&nbsp;<i className="fa fa-btc text-white" aria-hidden="true"></i>&nbsp;<span>{res.project.totalMoneyInBTC}</span>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="text-left">
                                <span>Tickets From ${res.project.ticketPriceInUSD}</span><span className="float-right">{daysLeft} Days Left</span>
                            </div>
                            <h3 className="fb text-center mb-2">{res.project.title}</h3>
                            <div className="row divider text-center">
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h5><strong> {res.project.donatedBTC.toFixed(8)} </strong></h5>       
                                    <img src={'../../' + BTC_ROUNDED} alt="BTC" width="50" height="50" />
                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h5><strong>{res.project.donatedETH.toFixed(8)}</strong></h5>                    
                                    <img src={'../../' + ETH_ROUNDED} alt="ETH" width="50" height="50" />
                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h5><strong> {res.project.donatedLTC.toFixed(8)} </strong></h5>                    
                                    <img src={'../../' + LTC_ROUNDED} alt="LTC" width="50" height="50" />
                                </div>
                            </div>
                        
                    </div>
                    </div>
                </div>}
                <Footer />
            </div>
        );
    }
}


ProjectDetailView.propTypes = {
    dispatch: PropTypes.func.isRequired,
      // intl: PropTypes.object.isRequired,
  };
  
  // Retrieve data from store as props
  function mapStateToProps(state) {
    return {
      res: state.app.res,
    };
  }
  
export default connect(mapStateToProps)(ProjectDetailView);
  