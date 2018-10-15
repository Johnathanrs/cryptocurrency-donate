import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class UserGuide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    render() {
        return(
            <div>
                <Header />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                    <h1>User Guide Page</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UserGuide;
