import React from 'react';
import './Skills.css';
import SkillSection from '../SkillSection/SkillSection';
import { skillSets } from '../../Util/SkillDetails/SkillDetails.js';

function Skills () {

    return (
        <section id="skills">
        <h2>skills</h2>
        {
          skillSets.map(element => 
            <SkillSection title={element.title} 
                          description={element.description}
                          skills={element.skills} 
                          key={element.title} />
            )
        }
      </section>
    )
}

export default Skills;