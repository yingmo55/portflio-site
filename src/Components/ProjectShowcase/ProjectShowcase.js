import React from 'react';
import './ProjectShowcase.css';
import Project from '../Project/Project';
import { projects } from '../../Util/ProjectDetails/ProjectDetails';

function ProjectShowcase () {

    return (
        <section id="projectShowcase">
          <h2>Projects</h2>
          <div id="showcase">
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