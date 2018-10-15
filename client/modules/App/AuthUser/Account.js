import React from 'react';

import AuthHeader from '../components/AuthHeader/AuthHeader';
import Footer from '../components/Footer/Footer';

import '../App.css';

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    componentWillMount() {
        if (typeof(window) !== "undefined") {
            const token = window.localStorage.getItem('smartproject');
            this.setState({ isUnAuth: !token, token });
        }
    }

    render() {
        return(
            <div>
                <AuthHeader />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                    <h1>Account Page</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Account;
