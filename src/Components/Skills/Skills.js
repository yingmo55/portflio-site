import React from 'react';
import './Skills.css';
import SkillSection from '../SkillSection/SkillSection';
import {language, framework, tools} from '../../Util/SkillDetails/SkillDetails.js';

function Skills () {

    return (
        <section id="skills">
        <h2>skills</h2>
        <SkillSection title={language.title} description={language.description}
        skills={language.skills} />
        <SkillSection title={framework.title} description={framework.description}
        skills={framework.skills} />
        <SkillSection title={tools.title} description={tools.description}
        skills={tools.skills} />
      </section>
    )
}

export default Skills;