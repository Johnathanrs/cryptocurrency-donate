import React from 'react';
import { Player } from 'video-react';

import '../../assets/css/cards_gallery.css';
import './App.css';

function ProjectView(props) {
    const { project, remainingDays, activePane, toggleDetail } = props;

    let  $imageGallery = null;
    if (project.images) {
        $imageGallery = project.images.map((image, key) => {
            return ( <div key={key} className="col-sm-6 col-md-6 col-lg-6">
                        <div className="card border-0 transform-on-hover">
                            <div className="card-img-container">
                                <a className="thumbnail fancybox" rel="ligthbox" href={'http://' +  window.location.host + '/' + image}>
                                    <img width="100%" className="img-responsive" alt="" src={'http://' +  window.location.host + '/' + image} />
                                    <div className='text-right'>
                                        <small className='text-muted'></small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>); 
        }, this);
    }
    let detailInfo = null;
    if (project.keyfacts) {
        detailInfo = project.keyfacts.map((fact, key) => {
            return (  <div key={key} className="col-sm-6 col-md-6 col-lg-6 black-color">
                    <div className="card border-0 transform-on-hover transparent-card">
                        <div className="card-body">{fact.name}</div>
                    </div>
                </div>
            );
        }, this);
    }
    const topLeftClass = activePane == 'Thumb' ? 'btn btn-info btn-link top-left' : 'd-none';
    const shortDescClass = activePane == 'Thumb' ? 'fs-125 short-desc' : 'd-none';
    const fullDescClass = activePane == 'Info' ? 'fs-125 short-desc' : 'd-none';
    const normalButtonClass = 'btn btn-info btn-link p-2';
    const InfoButtonClass = activePane == 'Info' ? normalButtonClass + ' active' : normalButtonClass;
    const videoButtonClass = activePane == 'Video' ? normalButtonClass + ' active' : normalButtonClass;
    const GalleryButtonClass = activePane == 'Gallery' ? normalButtonClass + ' active' : normalButtonClass;
    return (
        <div className="col-md-7 col-sm-12 col-12 mb-20">
            <div className="">
                <div className="clearfix pb-4">
                    <h2 className="main-title">
                            {project.title}
                    </h2>
                    <div className="card-title text-uppercase">
                        <div className="title-wraper">
                            <div className="sub-title"> {project.subTitle}</div>
                            <strong className="" style={{ fontSize: '1.15em' }}>{remainingDays} Days Left</strong>
                        </div>
                    </div>
                </div>
                <div className="card-img-container" >
                    {
                        activePane == 'Thumb' &&  <img className="card-img-top cursor-point" src={project.projectThumbnail} alt="Card image cap" />
                    } 
                    {
                        activePane == 'Video' && <Player >
                        <source
                            playsInline
                            src={'http://' + window.location.host + '/' + project.video} />
                        </Player>
                    }
                    {
                        activePane == 'Gallery' && <div className="gallery-block cards-gallery">
                                                        <div className="row">
                                                            {$imageGallery}
                                                        </div>
                                                    </div>
                    }
                    {
                        activePane == 'Info' && <div className="row">
                                                     {detailInfo}
                                                </div>
                    }
                    <a href="#" className={topLeftClass} data-toggle="tooltip" title="Location">
                        <span className="align-middle">{project.address && project.address.city}</span>
                        <i className="fa fa-map-marker fa-2x align-middle warning-color" aria-hidden="true"></i>
                    </a>
                    <div className="top-right">
                        <a href="#" className={InfoButtonClass} onClick={() => toggleDetail('Info')} >
                            <i className="fa fa-info-circle fa-2x align-middle" aria-hidden="true"></i>
                        </a>
                        <a href="javascrip:void(0)" title="Video Teaser" onClick={() => toggleDetail('Video')} className={videoButtonClass}>
                            <i className="fa fa-file-video-o fa-2x align-middle" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)" title="Images" onClick={() => toggleDetail('Gallery')}  className={GalleryButtonClass}>
                            <i className="fa fa-picture-o fa-2x align-middle" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className={shortDescClass}>
                        <p> {project.shortDescription}</p>
                    </div>
                    <div className={fullDescClass}>
                        <p> {project.fullDescription}</p>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default ProjectView;
