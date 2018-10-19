import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchProjects } from '../AppActions';

import EnhancedTable from './EnhancedTable';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchProjects());
    }

    componentWillMount(){
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartprojectadmin');
            if (token == null || token == 'null') {
                browserHistory.push('/admin/signin');
            } 
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.projects !== nextProps.projects && nextProps.projects && nextProps.projects.length > 0) {
            this.setState({ ...this.state, loading: false });
        }
    }

    render() {
        const { projects } = this.props;
        console.log('projects', projects);

        return (
            <div>
                <AdminHeader />
                <div className="container-fluid mt-100">
                    {!this.state.loading && <EnhancedTable data={projects} />}
                    {this.state.loading && <div>...loading</div>}
                </div>
                <Footer />
            </div>
        );
    }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
    // intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    projects: state.app.projects,
  };
}

export default connect(mapStateToProps)(Dashboard);
