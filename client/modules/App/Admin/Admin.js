import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style

// Import Components
import Helmet from 'react-helmet';

// Import Actions
// import { switchLanguage } from '../../modules/Intl/IntlActions';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentWillMount() {
    // let token = localStorage.getItem('smartproject');
    // if (token == null) {
    //   token = '';
    // }
    // this.props.dispatch(registerAuth(token));
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#fff' }}>
          <Helmet
            title="SmartProject - Admin"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          {/* <a href="#" className="back-to-top d-inline">
            <i className="fa fa-arrow-circle-up"></i>
          </a> */}

          <div >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  // intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(Admin);
