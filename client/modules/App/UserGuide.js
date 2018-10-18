import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';
import { fetchUserGuide } from './AppActions';

import FAQItem from './components/FAQItem/FAQItem';

class UserGuide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.guide != nextProps.guide) {
            this.setState({ ...this.state, loading: false });
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUserGuide());
    }

    render() {
        const { loading } = this.state;
        const { guide } = this.props;
        let faqs = '';
        if (guide && guide.length > 0) {
            faqs = guide[0].faqs.map((faq, key) => {
                const targetID = `collapse${key}`;
                const targetHeading = `heading${key}`;
                return (
                    <FAQItem key={key} faq={faq} targetID={targetID} targetHeading={targetHeading} />
                );
            });
        }
        return(
            <div>
                <Header />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                    <h1>User Guide Page</h1>
                    {loading && <div>...loading</div>}
                    {!loading && <div className="accordion" id="faq">
                        {faqs}
                    </div>}
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {   
    return {
      guide: state.app.guide,
    };
}

export default connect(mapStateToProps)(UserGuide);
