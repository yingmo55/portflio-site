import React from 'react';
import './Project.css';

function Project (props) {

const { title, src, desc } = props;

const bgImage = {
    backgroundImage: "url(" + src + ")",
}

    return (
        <section className="project">
            <div className="project-preview" style={bgImage}></div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </section>
    )
}

export default Project;