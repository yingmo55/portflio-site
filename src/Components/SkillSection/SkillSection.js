import React from 'react';
import './SkillSection.css';
import SkillTag from '../SkillTag/SkillTag';

function SkillSection (props) {
    const { title, description, skills } = props;

    return (
        <section className='skillSection' id={title}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="skill-tags">
            <SkillTag skills={skills}/>
        </div>
      </section>
    )
}

export default SkillSection;