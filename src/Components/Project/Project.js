import React from 'react';
import './Project.css';

function Project (props) {

const { title, src, desc, tech, liveLink, codeLink } = props;

const bgImage = {
    backgroundImage: "url(" + src + ")",
}

    return (
        <section className="project">
            <div className="project-preview" style={bgImage}>
            <div className='projectLink'><a href={liveLink}>Live</a> <a href={codeLink}>Code</a></div>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p className='techs'><strong>Technologies:</strong> <span>{tech.map(element=> element + ' ')}</span>
            </p>
        </section>
    )
}

export default Project;