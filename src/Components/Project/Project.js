import React from 'react';
import './Project.css';

function Project (props) {

const { title, src, desc, tech } = props;

const bgImage = {
    backgroundImage: "url(" + src + ")",
}

    return (
        <section className="project">
            <div className="project-preview" style={bgImage}>
            <div className='projectLink'><a>Live</a> | <a>Code</a></div>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p><strong>Technologies:</strong><span>{tech}</span></p>
        </section>
    )
}

export default Project;