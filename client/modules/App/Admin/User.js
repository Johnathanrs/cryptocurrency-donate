import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchProjects } from '../AppActions';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

import '../App.css';

class User extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchProjects());
    }

    componentWillMount(){
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartprojectadmin');
            if (token == null) {
                browserHistory.push('/admin/signin');
            } 
        }
    }

    render() {
        const { projects } = this.props;
        console.log('projects', projects);

        return (
            <div>
                <AdminHeader />
                <div className="container-fluid mt-100">
                    <h1>Users Page</h1>
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
    projects: state.app.projects,
  };
}

export default connect(mapStateToProps)(User);
