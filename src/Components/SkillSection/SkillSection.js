import React from 'react';
import './SkillSection.css';
import SkillTag from '../SkillTag/SkillTag';

function SkillSection (props) {
    const { title, description, skills } = props;

    return (
        <section id={title}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="skill-tags">
            <SkillTag skills={skills}/>
        </div>
      </section>
    )
}

export default SkillSection;