import React from 'react';
import './SkillSection.css';
import SkillTag from '../SkillTag/SkillTag';

function SkillSection () {
    return (
        <section id="language">
        <h3>Language</h3>
        <p>I can program in...</p>
        <div className="skill-tags">
            <SkillTag />
        </div>
      </section>
    )
}

export default SkillSection;