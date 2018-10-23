import React from 'react';
import ProjectItem from './ProjectItem';

import '../../../assets/css/cards_gallery.css';

function Featured(props) {
    const { activePane, featuredProjects, gotoHome } = props;
    let gallery = '';
    if (featuredProjects) {
        gallery = featuredProjects.map(project => {
            return <ProjectItem project={project} gotoHome={gotoHome}/>
        });
    }

    const shortDescClass = activePane == 'Thumb' ? 'fs-125 short-desc row' : 'd-none';
    return (
        <div>
            <h4 className="text-left black-color">Featured Projects</h4>
            <div className={shortDescClass}>
                {gallery}
            </div>
        </div>
       
    );
}

export default Featured;
