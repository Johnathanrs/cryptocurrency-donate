import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class Info extends React.Component {
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
                <Header />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                    <h1>Info Page</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Info;
