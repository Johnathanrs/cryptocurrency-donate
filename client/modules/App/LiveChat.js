import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class LiveChat extends React.Component {
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
                    <h1>Live Chat Page</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default LiveChat;
