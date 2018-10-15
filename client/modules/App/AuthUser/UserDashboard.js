import React from 'react';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';

import '../App.css';

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    render() {
        return(
            <div>
                <AuthHeader />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                    <h1>User Dashboard</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UserDashboard;

