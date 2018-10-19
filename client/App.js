/**
 * Root Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';
import Home from './modules/App/Home';
import AppComponent from './modules/App/App';
import Dashboard from './modules/App/Admin/Dashboard';
import Info from './modules/App/Info';

import callApi from './util/apiCaller';
import UserDashboard from './modules/App/AuthUser/UserDashboard';
import ProjectDetailView from './modules/App/Admin/ProjectDetailView';
import UserBrowseProjects from './modules/App/UserBrowseProjects';
import UserGuide from './modules/App/UserGuide';
import LiveChat from './modules/App/LiveChat';
import MyTickets from './modules/App/AuthUser/MyTickets';
import SignIn from './modules/App/Admin/SignIn';
import CustomerSignIn from './modules/App/CustomerSignIn';
import CustomerSignUp from './modules/App/CustomerSignUp';
import ProjectDetail from './modules/App/Admin/ProjectDetail';
import Project from './modules/App/Admin/Project';
import Referral from './modules/App/AuthUser/Referral';
import CheckTickets from './modules/App/AuthUser/CheckTickets';
import ClaimBenefits from './modules/App/AuthUser/ClaimBenefits';
import TransferTicket from './modules/App/AuthUser/TransferTicket';
import Account from './modules/App/AuthUser/Account';
import Statistics from './modules/App/Admin/Statistics';
import Admin from './modules/App/Admin/Admin';
import SignUp from './modules/App/Admin/SignUp';
import User from './modules/App/Admin/User';
import UserGuideManager from './modules/App/Admin/UserGuideManager';
// Import Routes
// import Routes from './routes';

if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/App/Admin/EnhancedTableHead');
  require('./modules/App/Admin/User');
  require('./modules/App/Admin/Project');
  require('./modules/App/Admin/Dashboard');
  require('./modules/App/Admin/SignIn');
  require('./modules/App/Home');
  require('./modules/App/TicketControl');
  require('./modules/App/Payment');
  require('./modules/App/UserRegister');
  require('./modules/App/Admin/ProjectDetail');
  require('./modules/App/UserBrowseProjects');
  require('./modules/App/AuthUser/UserDashboard');
  require('./modules/App/Info');
  require('./modules/App/UserGuide');
  require('./modules/App/LiveChat');
  require('./modules/App/AuthUser/MyTickets');
  require('./modules/App/CustomerSignIn');
  require('./modules/App/CustomerSignUp');
  require('./modules/App/Admin/ProjectDetailView');
  require('./modules/App/Admin/SignUp');
  require('./modules/App/Admin/UserGuideManager');
}


// Base stylesheet
require('./main.css');
import './modules/App/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
    this.requireAdminAuth = this.requireAdminAuth.bind(this);
  }

  requireAuth(nextState, replace, callback) {
    const tokenData = window.localStorage.getItem('smartproject');
    let isSignIn = '';
    try {
      isSignIn = JSON.parse(tokenData).isSignIn
    } catch(err) {
      console.log(err);
    }
    if (!tokenData || !isSignIn) {
      replace('/user/signin');
      callback();
      return;
    }
    callApi('users/authcheck', 'POST', {}).then(res => {
      if (res.status == 'authorized') {
        callback();
      } else {
        replace('/user/signin');
        callback();
      }
    });
  }

  requireAdminAuth(nextState, replace, callback) {
    const token = window.localStorage.getItem('smartprojectadmin');
    if (!token) {
      replace('/admin/signin');
      callback();
      return;
    }
    callApi('users/authcheckAdmin', 'POST', {}, token).then(res => {
      if (res.status == 'authorized') {
        callback();
      } else {
        replace('/admin/signin');
        callback();
      }
    });
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <IntlWrapper>
          <Router history={browserHistory}>
            <Route path="/" component={AppComponent}>
              <IndexRoute component={Home} />
              <Route
                path="/:id"
                component={Home}
              />
              {/* <Route
                path="/admin/signup"
                component={SignUp}
              /> */}
              <Route
                path="/admin/"
                onEnter={this.requireAdminAuth}
                component={Admin}
              >
                <Route
                  path="statistics"
                  component={Statistics}
                />
                <Route
                  path="dashboard"
                  component={Dashboard}
                />
                <Route
                  path="users"
                  component={User}
                />
                <Route
                  path="userguidemanager"
                  component={UserGuideManager}
                />
                <Route
                  path="project"
                  component={Project}
                />
                <Route
                  path="project/:id"
                  component={ProjectDetail}
                />
                <Route
                  path="projectdetail/:id"
                  component={ProjectDetailView}
                />
              </Route>
              <Route
                path="/user/browseprojects"
                component={UserBrowseProjects}
              />
              <Route
                path="/user/info"
                component={Info}
              />
              <Route
                path="/user/userguide"
                component={UserGuide}
              />
              <Route
                path="/user/livechat"
                component={LiveChat}
              />
              <Route
                path="/user/dashboard"
                component={UserDashboard}
                onEnter={this.requireAuth}
              />
              <Route
                path="/user/mytickets"
                component={MyTickets}
              />
              <Route
                path="/user/referral"
                component={Referral}
              />
              <Route
                path="/user/checktickets"
                component={CheckTickets}
              />
              <Route
                path="/user/claimbenefits"
                component={ClaimBenefits}
              />
              <Route
                path="/user/transferticket"
                component={TransferTicket}
              />
              <Route
                path="/user/account"
                component={Account}
              />
              <Route
                path="/admin/signin"
                component={SignIn}
              />
              
              <Route
                path="/user/signin"
                component={CustomerSignIn}
              />
              <Route
                path="/user/signup"
                component={CustomerSignUp}
              />
            </Route>
          </Router>
        </IntlWrapper>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
