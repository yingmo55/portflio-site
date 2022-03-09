import React from 'react';
import './ProjectShowcase.css';
import Project from '../Project/Project';
import { projects } from '../../Util/ProjectDetails/ProjectDetails';

function ProjectShowcase () {

    return (
        <section id="projectShowcase">
          <h2>Projects</h2>
          <div id="showcase">
            {
              projects.map(project => 
                <Project title={project.title} src={project.src} desc={project.shortDescription} tech={project.tools} />
                )
            }
          </div>
          <button className='moreProjectBtn'>More projects here</button>
      </section>
    )
}

export default ProjectShowcase;