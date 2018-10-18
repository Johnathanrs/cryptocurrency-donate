import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import NavButton from '../NavButton/NavButton';
import LOGO from '../../../../assets/img/logo.png';

import { saveToken } from '../../AuthActions';

// Import Style
import './Header.css';

class Header extends React.Component {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );
  constructor(props) {
    super(props);
    const { token } = props;
    this.state = {
      isUnAuth: !token,
    };

    this.navigate = this.navigate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (typeof(window) !== "undefined") {
      const tokenData = window.localStorage.getItem('smartproject');
      let token = '';
      try {
        token = JSON.parse(tokenData).token;
      } catch (err) {
        token = '';
      }
      this.setState({ isUnAuth: !token, token });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.token != nextProps.token) {
      const { token } = nextProps;
      this.setState({ isUnAuth: !token });
    }
  }

  logout() {
    localStorage.setItem('smartproject', '');
    this.props.dispatch(saveToken(''));
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
                  onClick={() => this.navigate('/user/browseprojects')}
                  label="Browse Projects"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/info')}
                  label="Info"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/userguide')}
                  label="User Guide"
                />
              </li>
              <li className="nav-item">
                <NavButton
                  onClick={() => this.navigate('/user/livechat')}
                  label="Live Chat"
                />
              </li>
              {!this.state.isUnAuth && <li className="nav-item">
                <button onClick={() => this.navigate('/user/mytickets')} className="btn btn-lg btn-link" type="button">Dashboard</button>
              </li>}
            </ul>
            {
              this.state.isUnAuth ? <button onClick={() => this.navigate('/user/signin')} className="btn btn-lg btn-rounded my-0 bg-light btn-rounded" href="#" >Login</button> : <button onClick={() => this.logout()} className="btn btn-lg btn-rounded my-0 bg-light btn-rounded" href="#" >Logout</button>
            }
          </div>
        </nav>
      </div>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  // toggleAddPost: PropTypes.func.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
  // intl: PropTypes.object.isRequired,
  token: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

export default connect(mapStateToProps)(Header);
