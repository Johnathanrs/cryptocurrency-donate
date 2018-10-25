import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchProjects, deleteProject, setFeaturedProject } from '../AppActions';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import TextField from '@material-ui/core/TextField';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { toast } from 'react-toastify';

import moment from 'moment';

import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';
class Dashboard extends Component {
   

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: '',
            country: '',
            city: '',
        };

        this.deleteProject = this.deleteProject.bind(this);
        this.setFeatured = this.setFeatured.bind(this);
    }

    onRowSelect = (row, isSelected, e) => {
        browserHistory.push(`admin/projectdetail/${row._id}`);
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
        if (this.props.projects !== nextProps.projects) {
            this.setState({ ...this.state, loading: false });
        }
    }

    searchProject = name => event => {
        this.setState({
          ...this.state,
          search: event.target.value,
        });
    };

    selectCountry(val) {
        this.setState({ ...this.state, country: val });
    }
    
    selectRegion(val) {
        this.setState({ ...this.state, city: val });
    }

    filterData(data) {
        let keyword = this.state.search;
        const newData = [];
        for (let i = 0; i < data.length; i++) {
            keyword = keyword.toLowerCase();
            const val = data[i];
            const a = moment(val.fundingDuration, 'YYYY-MM-DD');
            const b = moment().format('YYYY-MM-DD');
            const days = a.diff(b, 'days');
            const startDate = moment(val.startDate).format('MMM DD, YYYY');
            const actualDonors = val.donors.map(donor => { return donor._id; });
            const donors = actualDonors.filter((item, index) => {
                return actualDonors.indexOf(item) >= index;
            });
            val.cntOfdonors = donors.length;
            val.days = days;
            val.startDate = startDate;
            if (val.title.toLowerCase().includes(keyword) ||
            val.subTitle.toLowerCase().includes(keyword) ||
            val.address.country.toLowerCase().includes(keyword) ||
            val.address.city.toLowerCase().includes(keyword)) {
              if (this.state.country) {
                if ( val.address.country == this.state.country) {
                  if (this.state.city) {
                    if (val.address.city == this.state.city) {
                      newData.push(val);
                    }
                  } else {
                    newData.push(val);
                  }
                }
              } else {
                newData.push(val);
              }
            }
        }
    
        return newData;
    }

    deleteProject = (id) => {
        this.props.dispatch(deleteProject(id)).then(err => {
            if (err) {
                toast.warn(err);
            }
        });
    }

    setFeatured = (id, isFeatured) => {
        this.props.dispatch(setFeaturedProject(id, isFeatured)).then(err => {
            if (err) {
                toast.warn(err);
            }
        });
    }

    actionFormatter = (cell, row) => {
        return <button type="button" onClick={() => this.deleteProject(row._id)} className="btn btn-link btn-sm"><i className="fa fa-trash fa-2x"></i></button>;
    }

    activeFormatter = (cell, row, enumObject, index) => {
        console.log(`The row index: ${index}`);
        return (
            <input type="checkbox" checked={cell} onClick={() => this.setFeatured(row._id, !cell)} />
        );
      }

    render() {
        const { projects } = this.props;
        const data = projects && this.filterData(projects) || [];
        console.log('projects', projects);

        return (
            <div>
                <AdminHeader />
                <div className="container-fluid mt-100">
                    {!this.state.loading && <div> 
                        <div className="fs-125 fb" style={{ flex: '1 1 auto' }}>
                            Browser Projects
                        </div>
                        <div className="d-flex align-items-baseline">
                            <TextField
                                id="outlined-search"
                                label="Search Project"
                                type="search"
                                value={this.state.search}
                                onChange={this.searchProject('')}
                                margin="normal"
                            />
                            <div className="mb-sm-2" style={{ height: '36px' }}>
                                <CountryDropdown
                                    defaultOptionLabel="Choose a country"
                                    value={this.state.country}
                                    onChange={(val) => this.selectCountry(val)}
                                    style={{
                                        fontSize: '1.25rem',
                                        padding: '0.25rem',
                                        marginLeft: '1rem' }} />
                                <RegionDropdown
                                    country={this.state.country}
                                    value={this.state.city}
                                    blankOptionLabel="No country selected."
                                    defaultOptionLabel="Now select a region"
                                    style={{
                                        fontSize: '1.25rem',
                                        padding: '0.25rem' }}
                                    onChange={(val) => this.selectRegion(val)} />
                            </div>
                        </div>
                    
                        <BootstrapTable 
                            data={data}
                            selectRow={{ 
                                mode: 'radio',
                                clickToSelect: true,
                                onSelect: this.onRowSelect,
                            }}
                            striped={true}
                            hover={true}
                            pagination>
                            <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                            <TableHeaderColumn dataField="maximumAvailableTickets" dataSort={true}>Max Available Tickets</TableHeaderColumn>
                            <TableHeaderColumn dataField="totalMoneyInBTC" >Total (BTC)</TableHeaderColumn>
                            <TableHeaderColumn dataField="cntOfdonors" dataSort={true} width='150'># of Donors</TableHeaderColumn>
                            <TableHeaderColumn dataField="days" width='200'>Duration (Days)</TableHeaderColumn>
                            <TableHeaderColumn dataField="startDate" width='200'>Start Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="isFeatured" dataAlign="center" dataFormat={this.activeFormatter} export={false} width='100'>Featured</TableHeaderColumn>
                            <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" dataFormat={this.actionFormatter} export={false} width='70'></TableHeaderColumn>
                        </BootstrapTable>
                    </div>}
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
    errors: state.app.errors,
  };
}

export default connect(mapStateToProps)(Dashboard);
