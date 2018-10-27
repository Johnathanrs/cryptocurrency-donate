import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { post } from 'axios';
import { Player } from 'video-react';
import moment from 'moment';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import callApi from '../../../util/apiCaller';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreate: false,
            errOnCreate: '',
            projectThumbnail: '',
            imageUpload: false,
            videoUpload: false,
            images: [],
            title: '',
            sub_title: '',
            funding_duration: '2020-05-24',
            short_description: '',
            long_description: '',
            ticket_price_BTC: '',
            ticket_price_ETH: '',
            ticket_price_LTC: '',
            total_tickets: '',
            maximum_available_tickets_per_person: '',
            country: '',
            city: '',
            postal_code: '',
            coin_BTC: '',
            coin_ETH: '',
            coin_LTC: '',
            imagesToServer:[],
            name: '',
            key_facts: [{ name: '' }],
            titleErr: false,
            sub_titleErr: false,
            funding_durationErr: false,
            short_descriptionErr: false,
            long_descriptionErr: false,
            ticket_price_BTCErr: false, 
            total_ticketsErr: false,
            maximum_available_tickets_per_personErr: false,
            countryErr: false,
            cityErr: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.createProject = this.createProject.bind(this);
    }

    handleKeyFactsChange = (idx) => (evt) => {
        const newKeyFacts = this.state.key_facts.map((key_fact, sidx) => {
          if (idx !== sidx) return key_fact;
          return { ...key_fact, name: evt.target.value };
        });
        
        this.setState({ key_facts: newKeyFacts });
    }

    handleAddKeyFact = () => {
        this.setState({ key_facts: this.state.key_facts.concat([{ name: '' }]) });
    }

    handleRemoveKeyFact = (idx) => () => {
        this.setState({ key_facts: this.state.key_facts.filter((s, sidx) => idx !== sidx) });
    }

    setThumbnail = (image, key) => {
        window.document.querySelectorAll('div.gallery img').forEach((each) => {
            each.classList.remove('active');
        });
        window.document.querySelectorAll('div.gallery img')[key].classList.add('active');
        this.setState({ ...this.state, projectThumbnail: image });
    }

    removeImage = (key) => {
        // const key = e.target.getAttribute('data-key');
        let images = this.state.images;
        delete images[key];
        let index = -1;
        const arr_length = images ? images.length : 0;
        let resIndex = -1;
        const result = [];

        while (++index < arr_length) {
            const value = images[index];

            if (value) {
                result[++resIndex] = value;
            }
        }
        const projectThumbnail = result.length == 0 ? null : this.state.projectThumbnail;
        this.setState({
            ...this.state,
            images: result,
            projectThumbnail: projectThumbnail,
        });
    }

    handleKeyDown = name => event => {
        if(event.keyCode == 13) {
            this.updateCoinPrice(event.target.value);
        }
    }

    updateCoinPrice = (value) => {
        const self = this;
        callApi('fxrate').then(json => {
            const ticket_price_ETH = value / parseFloat(json.ETH_BTC);
            const ticket_price_LTC = value / parseFloat(json.LTC_BTC);
            const ticket_price_USD = value * parseFloat(json.BTC_USD);
            const totalUSD = ticket_price_USD * this.state.total_tickets;
            const totalBTC = value * this.state.total_tickets;
            self.setState({
                ...self.state,
                ticket_price_BTC: value,
                ticket_price_ETH: ticket_price_ETH.toFixed(8),
                ticket_price_LTC: ticket_price_LTC.toFixed(8),
                ticket_price_USD: ticket_price_USD.toFixed(3),
                total_money_in_USD: totalUSD.toFixed(3),
                total_money_in_BTC: totalBTC.toFixed(8),
            });
        })
        this.setState({
            ...this.state,
            ticket_price_BTC: value,
        });
    }

    handleBlur = name => event => {
        if (event.target.value) {
            this.updateCoinPrice(event.target.value);
        }
    }

    selectCountry (val) {
        this.setState({
            country: val,
            countryErr: !val ? true : false,
        });
    }
    
    selectCity (val) {
        this.setState({
            city: val,
            cityErr: !val ? true : false,
        });
    }

    handleChange = name => event => {
        this.setState({
            ...this.state,
            [name]: event.target.value,
            [name+'Err']: event.target.required && !event.target.value ? true : false, 
        });
    };

    createProject = () => {
        const self = this;
        // Apply validate
        
        this.setState({ ...this.state,
            titleErr: !this.state.title ? true : false,
            sub_titleErr: !this.state.sub_title ? true : false,
            short_descriptionErr: !this.state.short_description ? true : false,
            long_descriptionErr: !this.state.long_description ? true : false,
            ticket_price_BTCErr: !this.state.ticket_price_BTC || this.state.ticket_price_BTC == '0' ? true : false,
            ticket_price_ETHErr: !this.state.ticket_price_ETH || this.state.ticket_price_ETH == '0' ? true : false,
            ticket_price_LTCErr: !this.state.ticket_price_LTC || this.state.ticket_price_LTC == '0' ? true : false,
            total_ticketsErr: !this.state.total_tickets  || this.state.total_tickets == '0' ? true : false,
            funding_durationErr: moment(this.state.funding_duration, 'YYYY-MM-DD').isBefore(moment()) ? true : false,
            maximum_available_tickets_per_personErr: !this.state.maximum_available_tickets_per_person ||  this.state.maximum_available_tickets_per_person == '0' || this.state.maximum_available_tickets_per_person > 10 ? true : false,
            countryErr: !this.state.country ? true : false,
            cityErr: !this.state.city ? true : false,
            coin_BTCErr: !this.state.coin_BTC ? true : false,
            coin_ETHErr: !this.state.coin_ETH ? true : false,
            coin_LTCErr: !this.state.coin_LTC ? true : false,
            totalMoneyInUSDErr: !this.state.total_money_in_USD ? true : false,
            totalMoneyInBTCErr: !this.state.total_money_in_BTC ? true : false,
        }, () => {
            if (this.state.titleErr ||
                this.state.sub_titleErr ||
                this.state.short_descriptionErr ||
                this.state.long_descriptionErr ||
                this.state.ticket_price_BTCErr ||
                this.state.ticket_price_ETHErr ||
                this.state.ticket_price_LTCErr ||
                this.state.total_ticketsErr ||
                this.state.maximum_available_tickets_per_personErr ||
                this.state.countryErr ||
                this.state.cityErr ||
                this.state.coin_BTCErr ||
                this.state.coin_ETHErr ||
                this.state.coin_LTCErr) {
                   this.setState({ ...this.state,
                    errOnCreate: 'Please fix the errors'
                   });
            } else {
                this.setState({ ...this.state,
                    isCreate: true,
                });
                callApi('projects', 'POST', { project: this.state }).then((res, err) => {
                    console.log('loading finished', res, err);
                    let message = 'Successfully created';
                    if  (res.errors) {
                        message = err;
                    }
                    self.setState({ ...self.state, isCreate: false, errOnCreate: message });
                });
            }
        });
    }

    handleVideoUpload = (files) => {
        const self = this;
        this.setState({ ...this.state, videoUpload: true });
        let file = files[0];
        const url = '/api/uploadVideo';
        const formData = new FormData();
        formData.append('uploadFile', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        post(url, formData, config)
            .then(function (res) {
                console.log('loading finished', res);
                self.setState({
                    ...self.state,
                    videoUpload: false,
                    videoPreviewUrl: 'http://' + window.location.host +'/' + res.data,
                    video: res.data });
            })
            .catch(function (err) {
                console.log('loading finished', err);
                self.setState({ ...self.state, videoUpload: false });
            });
    }

    handleFileUpload = (files) => {
        if (this.state.images.length == 10) {
            alert("You cannot add an image any more unless you remove any one.");
            return;
        }
        const self = this;
        this.setState({ ...this.state, imageUpload: true });
        let file = files[0];
        const url = '/api/upload';
        const formData = new FormData();
        formData.append('uploadFile', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        post(url, formData, config)
            .then(function (res) {
                console.log('loading finished', res);
                let images = self.state.images;
                images.push(res.data);
                self.setState({
                    ...self.state,
                    imageUpload: false,
                    projectThumbnail: res.data,
                    images: images,
                });
            })
            .catch(function (err) {
                console.log('loading finished', err);
                self.setState({ ...self.state, imageUpload: false });
            });
    }

    render() {
        let {projectThumbnail, videoPreviewUrl} = this.state;
        let $imagePreview = null, $videoPreview = null;
        if (projectThumbnail) {
            $imagePreview = ( <img src={`http://${window.location.host}/${projectThumbnail}`} /> );
        } else {
            $imagePreview = (<div className="previewText">Project Thumbnail</div>);
        }

        let $imageGallery = <div>No Image Added</div>;
        if (this.state.images.length > 0) {
            const self = this;
            $imageGallery = this.state.images.map((image, key) => {
                    return ( <div key={key} className="gallery transform-on-hover card-img-container">
                            <img src={'http://' + window.location.host +'/' + image} onClick={this.setThumbnail.bind(this, image, key)} alt="5Terre" width="600" height="400" />
                            <a  href="#" className="btn btn-link gallery-top-right hidden-close" onClick={this.removeImage.bind(null, key)} data-key={key}><i className="fa fa-close fa-2x" aria-hidden="true"></i></a>
                    </div>); 
                }, this);
        }

        if (videoPreviewUrl) {
            $videoPreview = ( <Player>
                <source src={videoPreviewUrl} />
              </Player> );
        } else {
            $videoPreview = (<div className="previewText">No Video</div>);
        }
        const inputProps = {
            step: 300,
        };
        return (
            <div>
                <AdminHeader />
                <div className="container bg-white mt-100">
                    <div className="card bg-light">
                        <div className="card-body card-header card-title">
                            <h3>Create New Project</h3>{this.state.isCreate && <span className="warning-color">Please wait...</span>}
                            <button className="btn btn-lg bg-warning text-white float-right" onClick={this.createProject}>{this.state.isCreate && <i className="fa fa-spinner fa-spin fa-3x text-red"></i>}&nbsp;Create</button>
                            <p className="warning-color">{!this.state.isCreate && this.state.errOnCreate}</p>
                        </div>
                        <div className="container bg-white">
                            <div className="row card-body">
                                <TextField
                                    required
                                    error={this.state.titleErr}
                                    id="title"
                                    label="Title"
                                    className="textField w-20rem"
                                    style={{ margin: 8 }}
                                    helperText="Up to 30 letters"
                                    value={this.state.title}
                                    onChange={this.handleChange('title')}
                                    margin="normal"
                                    inputProps={inputProps}
                                />
                                <TextField
                                    required
                                    id="sub_title"
                                    error={this.state.sub_titleErr}
                                    label="Sub Title"
                                    className="textField w-20rem"
                                    style={{ margin: 8 }}
                                    helperText="Up to 45 letters"
                                    value={this.state.sub_title}
                                    onChange={this.handleChange('sub_title')}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="funding_duration"
                                    error={this.state.funding_durationErr}
                                    type="date"
                                    label="Funding Duration"
                                    style={{ margin: 8 }}
                                    className="textField"
                                    value={this.state.funding_duration}
                                    margin="normal"
                                    onChange={this.handleChange('funding_duration')}
                                />
                            </div>
                            <div className="row card-body">
                                <TextField
                                    required
                                    id="short_description"
                                    error={this.state.short_descriptionErr}
                                    label="Short Description"
                                    className="textField w-20rem"
                                    style={{ margin: 8 }}
                                    multiline
                                    rowsMax="4"
                                    helperText="Up to 50 words"
                                    value={this.state.short_description}
                                    onChange={this.handleChange('short_description')}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="long_description"
                                    label="Long Description"
                                    error={this.state.long_descriptionErr}
                                    className="textField w-40rem"
                                    style={{ margin: 8 }}
                                    multiline
                                    rowsMax="7"
                                    helperText="Up to 5000 words"
                                    value={this.state.long_description}
                                    onChange={this.handleChange('long_description')}
                                    margin="normal"
                                />
                            </div>
                            <div className="row card-body">
                                <TextField
                                    required
                                    id="ticket_price_BTC"
                                    error={this.state.ticket_price_BTCErr}
                                    label="Ticket Price in BTC"
                                    className="textField"
                                    margin="normal"
                                    type="number"
                                    style={{ margin: 8 }}
                                    helperText="Donation price for one ticket in BTC"
                                    value={this.state.ticket_price_BTC}
                                    onChange={this.handleChange('ticket_price_BTC')}
                                    onKeyDown={this.handleKeyDown('ticket_price_BTC')}
                                    onBlur={this.handleBlur('ticket_price_BTC')}
                                />
                                <TextField
                                    required
                                    disabled
                                    id="ticket_price_USD"
                                    label="Ticket Price in USD"
                                    className="textField"
                                    margin="normal"
                                    type="number"
                                    style={{ margin: 8 }}
                                    helperText="Donation price for one ticket in USD"
                                    value={this.state.ticket_price_USD}
                                    onChange={this.handleChange('ticket_price_USD')}
                                />
                                <TextField
                                    required
                                    disabled
                                    error={this.state.ticket_price_ETHErr}
                                    id="ticket_price_ETH"
                                    label="Ticket Price in ETH"
                                    className="textField"
                                    margin="normal"
                                    type="number"
                                    style={{ margin: 8 }}
                                    helperText="Donation price for one ticket in ETH"
                                    value={this.state.ticket_price_ETH}
                                    onChange={this.handleChange('ticket_price_ETH')}
                                />
                                <TextField
                                    required
                                    disabled
                                    id="ticket_price_LTC"
                                    label="Ticket Price in LTC"
                                    error={this.state.ticket_price_LTCErr}
                                    className="textField"
                                    margin="normal"
                                    type="number"
                                    style={{ margin: 8 }}
                                    helperText="Donation price for one ticket in LTC"
                                    value={this.state.ticket_price_LTC}
                                    onChange={this.handleChange('ticket_price_LTC')}
                                />
                            </div>
                            <div className="row card-body">
                                <TextField
                                    required
                                    id="total_tickets"
                                    error={this.state.total_ticketsErr}
                                    label="Total Tickets"
                                    type="number"
                                    className="textField"
                                    style={{ margin: 8 }}
                                    margin="normal"
                                    value={this.state.total_tickets}
                                    onChange={this.handleChange('total_tickets')}
                                />
                                <TextField
                                    required
                                    id="total_money_in_BTC"
                                    error={this.state.total_money_in_btcErr}
                                    label="Total Money(BTC)"
                                    type="number"
                                    className="textField"
                                    style={{ margin: 8 }}
                                    margin="normal"
                                    value={this.state.total_money_in_BTC}
                                    onChange={this.handleChange('total_money_in_BTC')}
                                />
                                <TextField
                                    required
                                    id="total_money_in_USD"
                                    error={this.state.total_money_in_USDErr}
                                    label="Total Money(USD)"
                                    type="number"
                                    className="textField"
                                    style={{ margin: 8 }}
                                    margin="normal"
                                    value={this.state.total_money_in_USD}
                                    onChange={this.handleChange('total_money_in_USD')}
                                />
                                <TextField
                                    required
                                    id="maximum_available_tickets_per_person"
                                    error={this.state.maximum_available_tickets_per_personErr}
                                    label="Max Avaliable Tickets / Person"
                                    className="textField"
                                    helperText="Up to 10 tickets"
                                    type="number"
                                    style={{ margin: 8 }}
                                    value={this.state.maximum_available_tickets_per_person}
                                    margin="normal"
                                    onChange={this.handleChange('maximum_available_tickets_per_person')}
                                />
                                <div className="row d-flex align-items-baseline mx-1">
                                    <div className="mb-sm-2" style={{ height: '36px' }}>
                                        <CountryDropdown
                                        defaultOptionLabel="Choose a country"
                                        value={this.state.country}
                                        onChange={(val) => this.selectCountry(val)}
                                        classes={this.state.countryErr ? 'selectErr' : ''}
                                        style={{
                                            fontSize: '1.25rem',
                                            padding: '0.25rem',
                                            marginLeft: '0.5rem' }} />
                                        <RegionDropdown
                                            country={this.state.country}
                                            value={this.state.city}
                                            defaultOptionLabel="Select a region"
                                            classes={this.state.cityErr ? 'selectErr' : ''}
                                            style={{
                                                fontSize: '1.25rem',
                                                padding: '0.25rem',
                                                marginRight: '0.5rem' }}
                                            onChange={(val) => this.selectCity(val)} />
                                    </div>
                                    <TextField
                                            id="postal_code"
                                            label="Postal Code"
                                            className=""
                                            style={{ margin: 8 }}
                                            value={this.state.postal_code}
                                            margin="normal"
                                            onChange={this.handleChange('postal_code')}
                                        />
                                </div>
                            </div>
                        
                            <div className="row card-body">
                               
                                {this.state.key_facts.map((key_fact, idx) => (
                                    <div className="d-flex">
                                        <TextField
                                            id="key_facts"
                                            key={idx}
                                            label="Key Facts"
                                            style={{ margin: 8 }}
                                            helperText='key fact'
                                            value={key_fact.name}
                                            margin="normal"
                                            onChange={this.handleKeyFactsChange(idx)}
                                        />
                                        <button type="button" onClick={this.handleRemoveKeyFact(idx)} className="btn btn-link btn-sm"><i className="fa fa-trash fa-2x"></i></button>
                                    </div>
                                    ))}
                                <button type="button" onClick={this.handleAddKeyFact} className="btn btn-link btn-md"><i className="fa fa-plus"></i> Add Key Fact</button>
                                    
                            </div>
                            <div className="row card-body">
                                <TextField
                                    required
                                    id="my_wallet_BTC"
                                    error={this.state.coin_BTCErr}
                                    label="My Wallet (BTC)"
                                    className="textField"
                                    style={{ margin: 8 }}
                                    helperText="Bitcoin Address"
                                    value={this.state.coin_BTC}
                                    margin="normal"
                                    onChange={this.handleChange('coin_BTC')}
                                />
                                <TextField
                                    required
                                    id="my_wallet_ETH"
                                    error={this.state.coin_ETHErr}
                                    label="My Wallet (ETH)"
                                    className="textField"
                                    style={{ margin: 8 }}
                                    helperText="Etherum Address"
                                    value={this.state.coin_ETH}
                                    margin="normal"
                                    onChange={this.handleChange('coin_ETH')}
                                />
                                <TextField
                                    required
                                    id="my_wallet"
                                    error={this.state.coin_LTCErr}
                                    label="My Wallet (LTC)"
                                    className="textField"
                                    style={{ margin: 8 }}
                                    helperText="Litecoin Address"
                                    value={this.state.coin_LTC}
                                    margin="normal"
                                    onChange={this.handleChange('coin_LTC')}
                                />
                            </div>
                            
                            <Divider />
                            <div className="row m-2 card-body">
                                <div className="">
                                    <p className="fb">Project Image Upload</p>
                                    <div>
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="contained-button-file"
                                            type="file"
                                            onChange={ (e) => this.handleFileUpload(e.target.files) }
                                            name="uploadFile"
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button type="submit" variant="contained" component="span">
                                                Upload
                                            </Button>
                                            {this.state.imageUpload && <i className="fa fa-spinner fa-spin fa-3x text-red"></i>}
                                            {this.state.images.length == 0 && <span className="warning-color ml-1">Reqired*</span>}
                                        </label>
                                    </div>
                                    
                                    <div className="imgPreview">
                                        {$imagePreview}
                                    </div>
                                </div>
                                <div>
                                    {$imageGallery}
                                </div>
                            </div>

                            <div className="m-2 card-body">
                                <p className="fb mr-2">Project Teaser Video Upload</p>
                                    <input
                                        accept="video/*"
                                        style={{ display: 'none' }}
                                        id="contained-video-file"
                                        type="file"
                                        onChange={(e) => this.handleVideoUpload(e.target.files)}
                                        name="uploadFile"
                                    />
                                    <label htmlFor="contained-video-file">
                                        <Button type="submit" variant="contained" component="span">
                                            Upload
                                        </Button>
                                        {this.state.videoUpload && <i className="fa fa-spinner fa-spin fa-3x text-red"></i>}
                                    </label>
                                    <div className="videoPreview">
                                        {$videoPreview}
                                    </div>
                            </div>
                            <div className="card-body card-footer card-title text-uppercase">
                                <button className="btn btn-lg bg-warning text-white float-right" onClick={this.createProject}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
       );
    }
}

export default Project;
