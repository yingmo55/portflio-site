import React from 'react';
import './SkillTag.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillTag (props) {
    const skills = props.skills;

    return skills.map((skill, index) => ( <div className="skill-tag" key={index} id={skill.name}> 
        { skill.src && 
            <FontAwesomeIcon icon={skill.src} size="2x" className='skill-icon' /> 
        }
        <span>{skill.name}</span>
    </div>) )
}

export default SkillTag;