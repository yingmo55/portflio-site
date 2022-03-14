import React from 'react';
import './Skills.css';
import SkillSection from '../SkillSection/SkillSection';
import { skillSets } from '../../Util/SkillDetails/SkillDetails.js';

function Skills () {

    return (
        <section id="skills">
          <h3 tabindex="0">skills</h3>
          <div className='sectionDiv'>
            {
              skillSets.map(element => 
                <SkillSection title={element.title} 
                              description={element.description}
                              skills={element.skills} 
                              key={element.title} />
                )
            }
          </div>
      </section>
    )
}

export default Skills;