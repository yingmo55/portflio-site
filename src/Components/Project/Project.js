import React from 'react';
import './Project.css';

function Project (props) {

const { title, src, desc, tech, liveLink, codeLink } = props;

const bgImage = {
    backgroundImage: "url(" + src + ")",
}

    return (
        <section className="project">
            <div className="project-preview" style={bgImage} tabindex="0">
            <div className='projectLink'><a className='link-to-project' href={liveLink}>Live</a> <a className='link-to-project' href={codeLink}>Code</a></div>
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
            <p className='techs'><strong>Technologies:</strong> <span>{tech.map(element=> element + ' ')}</span>
            </p>
        </section>
    )
}

export default Project;