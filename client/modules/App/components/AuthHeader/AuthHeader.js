import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import NavButton from '../NavButton/NavButton';
import LOGO from '../../../../assets/img/logo.png';

// Import Style
import './AuthHeader.css';


class AuthHeader extends React.Component {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );
  constructor(props) {
    super(props);
    this.state = {
      isUnAuth: true,
    };

    this.navigate = this.navigate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (typeof(window) !== "undefined") {
      const token = window.localStorage.getItem('smartproject');
      this.setState({ isUnAuth: !token, token });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.token != nextProps.token) {
      const { token } = nextProps;
      this.setState({ isUnAuth: !token });
    }
  }


  logout() {
    localStorage.setItem('smartproject', '');
    this.setState({ ...this.state, isUnAuth: true });
    browserHistory.push('/');
  }

  navigate = (url) => {
    browserHistory.push(url);
  }

  render() {
    return (
      <div>
        <nav className="header navbar navbar-light nav-pills fixed-top scrolling-navbar navbar-expand-lg" >
          <a className="navbar-brand" href="/">
            <img src={LOGO} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item active">
                <NavButton
                  onClick={() => this.navigate('/user/mytickets')}
                  label="My Tickets"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/referral')}
                  label="Referral"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/checktickets')}
                  label="Check Your Tickets"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/claimbenefits')}
                  label="Claim Your Benefites"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/transferticket')}
                  label="Transfer Tickets"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/account')}
                  label="Account"
                />
              </li>
            </ul>
            <button onClick={() => this.logout()} className="btn btn-lg btn-rounded my-0 bg-light btn-rounded" href="#" >Logout</button>
          </div>
        </nav>
      </div>
    );
  }
}

AuthHeader.contextTypes = {
  router: PropTypes.object,
};

AuthHeader.propTypes = {
  // toggleAddPost: PropTypes.func.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
  // intl: PropTypes.object.isRequired,
};

export default AuthHeader;
