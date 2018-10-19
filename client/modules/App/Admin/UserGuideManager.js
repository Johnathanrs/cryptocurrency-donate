import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';

import { fetchUserGuide } from '../AppActions';

class UserGuideManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
        this.handelAddFAQ = this.handelAddFAQ.bind(this);
        this.handelRemoveFAQ = this.handelRemoveFAQ.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.guide != nextProps.guide) {
            this.setState({ ...this.state, loading: false, guide: nextProps.guide[0] });
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUserGuide());
    }

    handleFAQChange = (idx, name) => (evt) => {
        const newGuide = this.state.guide.faqs.map((faq, sidx) => {
          if (idx !== sidx) return faq;
          return { ...faq, [name]: evt.target.value };
        });
        
        this.setState({ guide: newGuide });
    }

    handelAddFAQ = () => {
        const guide = this.state.guide;
        guide.faqs = this.state.guide.faqs.concat([{ question: '', answer: '' }])
        this.setState({ guide: guide });
    }

    handelRemoveFAQ = (idx) => () => {
        const guide = this.state.guide;
        guide.faqs = guide.faqs.filter((s, sidx) => idx !== sidx);
        this.setState({ guide: guide });
    }
    
    render() {
        const { loading } = this.state;
        return(
            <div>
                <AdminHeader />
                <div className="container-fluid mt-5" style={{ paddingTop: '70px' }}>
                    <h1>User Guide Manager Page</h1>
                    <div className="card">
                        <div className="card-body">
                            <button type="button" onClick={this.handelAddFAQ} className="btn btn-link btn-md"><i className="fa fa-plus"></i> Add new FAQ</button>
                            {!loading && this.state.guide.faqs.map((faq, idx) => (
                                <div className="d-flex">
                                    <TextField
                                        id="question"
                                        key={idx}
                                        label="Question"
                                        style={{ margin: 8 }}
                                        helperText='Up to 30 letters'
                                        value={faq.question}
                                        margin="normal"
                                        onChange={this.handleFAQChange(idx, 'question')}
                                    />
                                    <TextField
                                        id="qnswer"
                                        key={idx}
                                        label="Answer"
                                        style={{ margin: 8 }}
                                        helperText='Up to 30 letters'
                                        value={faq.answer}
                                        margin="normal"
                                        onChange={this.handleFAQChange(idx, 'answer')}
                                    />
                                    <button type="button" onClick={this.handelRemoveFAQ(idx)} className="btn btn-link btn-sm"><i className="fa fa-trash fa-2x"></i></button>
                                </div>
                                ))}
                            
                        </div>
                    </div>
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

export default connect(mapStateToProps)(UserGuideManager);
