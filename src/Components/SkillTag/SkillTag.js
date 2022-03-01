import React from 'react';
import './SkillTag.css';

function SkillTag (props) {
    const skills = props.skills;

    return skills.map((skill, index) => ( <p className="skill-tag" key={index} id={skill.name}> { skill.src && <img className="skill-icon" src={skill.src} alt={`${skill.name} logo`}/>} {skill.name} </p>) )
}

export default SkillTag;