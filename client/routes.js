/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import Home from './modules/App/Home/Home';
import BrowserProjects from './modules/App/Admin/BrowserProjects';
import Info from './modules/App/Info';
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
// import SignUp from './modules/App/Admin/SignUp';
import User from './modules/App/Admin/User';
import UserGuideManager from './modules/App/Admin/UserGuideManager';
import ChangePassword from './modules/App/ChangePassword';
import ForgetPassword from './modules/App/ForgetPassword';
import ReferralManager from './modules/App/Admin/ReferralManager';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  // require('./modules/Post/pages/PostListPage/PostListPage');
  // require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./modules/App/Admin/EnhancedTableHead');
  require('./modules/App/Admin/User');
  require('./modules/App/Admin/Project');
  require('./modules/App/Admin/BrowserProjects');
  require('./modules/App/Admin/SignIn');
  require('./modules/App/Home/Home');
  require('./modules/App/Home/TicketControl');
  require('./modules/App/Home/Payment');
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
  require('./modules/App/Admin/UserGuideManager');
  require('./modules/App/AuthUser/CheckTickets');
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route
      path="/:id"
      component={Home}
    />
    <Route
      path="/referral/:id/:referralID/:field1/:field2/:email"
      component={Home}
    />
    {/* <Route
      path="/admin/signup"
      component={SignUp}
    /> */}
    <Route
      path="/admin/"
      component={Admin}
    >
      <Route
        path="statistics"
        component={Statistics}
      />
      <Route
        path="dashboard"
        component={BrowserProjects}
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
      <Route
        path="referral"
        component={ReferralManager}
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
    />
    <Route
      path="/user/mytickets"
      component={MyTickets}
    />
    <Route
      path="/user/mytickets/:newTicket/:sender"
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
    
    <Route
      path="/user/changepassword/:token"
      component={ChangePassword}
    />
    <Route
      path="/user/forgetpassword"
      component={ForgetPassword}
    />
  </Route>

  );

