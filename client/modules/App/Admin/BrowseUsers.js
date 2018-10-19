import React from 'react';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

class BrowseUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    componentWillMount() {
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartprojectadmin');
            this.setState({ isUnAuth: !token, token });
        }
    }

    render() {
        return(
            <div>
                <AdminHeader />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                    <h1>BrowseUsers Page</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default BrowseUsers;
