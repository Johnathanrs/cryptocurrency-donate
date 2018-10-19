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
        if (this.props.project !== nextProps.project) {
            const project = nextProps.project;
            this.setState({ ...this.state, loading: false });
        }
    }

    updateProject = () => {
        browserHistory.push(`/admin/project/${this.props.project._id}`)
    }
    
    render() {
        const { project } = this.props;
        console.log(this.props);
        let daysLeft = 0;
        let thumbnail = '';
        if (project) {
            let a = moment(project.fundingDuration, 'YYYY-MM-DD');
            let b = moment().format('YYYY-MM-DD');
            daysLeft = a.diff(b, 'days');
            thumbnail = 'http://' +  window.location.host + '/' + project.projectThumbnail;
        }
        return (
            <div className="container">
                <AdminHeader />
                {this.state.loading && <div>...loading</div>}
                {!this.state.loading && <div className="row" style={{ marginTop: '90px' }}> 
                <div className="col-md-12">
                    <div className=""> 
                        <button className="btn btn-lg bg-warning text-white float-right" onClick={this.updateProject}>Update</button>
                    </div>
                    <div className="card border-0 transform-on-hover">
                        <div className="card-img-container">
                            <a href="#">
                                <img className="card-img-top" src={thumbnail} alt={project.title} />
                            </a>
                            <a href="#" className="btn btn-info btn-link top-left bg-dard" data-toggle="tooltip" title="Location">
                                <span className="align-middle">{project.address && project.address.city}</span>
                                <i className="fa fa-map-marker fa-2x align-middle warning-color" aria-hidden="true"></i>
                            </a>
                            <div className="bottom-left bg-dark px-1">
                                <span>$&nbsp;{project.totalMoneyInUSD}</span>&nbsp;&nbsp;<i className="fa fa-btc text-white" aria-hidden="true"></i>&nbsp;<span>{project.totalMoneyInBTC}</span>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="text-left">
                                <span>Tickets From ${project.ticketPriceInUSD}</span><span className="float-right">{daysLeft} Days Left</span>
                            </div>
                            <h3 className="fb text-center mb-2">{project.title}</h3>
                            <div className="row divider text-center">
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h5><strong> {project.donatedBTC.toFixed(8)} </strong></h5>       
                                    <img src={'../../' + BTC_ROUNDED} alt="BTC" width="50" height="50" />
                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h5><strong>{project.donatedETH.toFixed(8)}</strong></h5>                    
                                    <img src={'../../' + ETH_ROUNDED} alt="ETH" width="50" height="50" />
                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h5><strong> {project.donatedLTC.toFixed(8)} </strong></h5>                    
                                    <img src={'../../' + LTC_ROUNDED} alt="LTC" width="50" height="50" />
                                </div>
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
      project: state.app.project,
    };
  }
  
export default connect(mapStateToProps)(ProjectDetailView);
  