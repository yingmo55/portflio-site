import React from 'react';
import './ProjectShowcase.css';
import Project from '../Project/Project';
import { projects, openSource, freelance } from '../../Util/ProjectDetails/ProjectDetails';

function ProjectShowcase () {

    return (
        <section id="projectShowcase">
          <h2 tabindex="0">Projects</h2>
          <h3 tabindex="0"> Open Source Contribution</h3>
          <div className='showcase'>
            {  openSource.map(project =>
                  <Project title={project.title}
                           src={project.src}
                           desc={project.shortDescription}
                           tech={project.tools}
                           liveLink={project.liveLink}
                           codeLink={project.codeLink}
                           key={project.title} />
                  )}
          </div>
          <h3 tabindex="0"> Recent Works</h3>
            <div className='showcase'>
            {  freelance.map(project => 
                <Project title={project.title} 
                         src={project.src} 
                         desc={project.shortDescription} 
                         tech={project.tools}
                         liveLink={project.liveLink}
                         codeLink={project.codeLink}
                         key={project.title} />
                )}
            </div>
          <h3 tabindex="0">Previous Works</h3>
          <div className="showcase">
          {  projects.map(project => 
                <Project title={project.title} 
                         src={project.src} 
                         desc={project.shortDescription} 
                         tech={project.tools}
                         liveLink={project.liveLink}
                         codeLink={project.codeLink}
                         key={project.title} />
                )}
          </div>
      </section>
    )
}

export default ProjectShowcase;