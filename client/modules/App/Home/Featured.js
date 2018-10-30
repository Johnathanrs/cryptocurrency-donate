import React from 'react';
import ProjectItem from './ProjectItem';

import '../../../assets/css/cards_gallery.css';

function Featured(props) {
    const { className, featuredProjects, gotoHome } = props;
    let gallery = '';
    if (featuredProjects) {
        gallery = featuredProjects.map(project => {
            return <ProjectItem project={project} gotoHome={gotoHome}/>
        });
    }

    return (
        <div className={className}>
            <h4 className="text-left black-color">Featured Projects</h4>
            <div>
                {gallery}
            </div>
        </div>
       
    );
}

export default Featured;
