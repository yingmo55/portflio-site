import React from 'react';
import './ProjectShowcase.css';
import Project from '../Project/Project';

function ProjectShowcase () {
    return (
        <section id="projectShowcase">
        <h2>Projects Showcase</h2>
        <div id="showcase">
        <Project />
        </div>
      </section>
    )
}

export default ProjectShowcase;