import React from 'react';
import './ProjectShowcase.css';
import Project from '../Project/Project';
import { calculator, todoList, whatToLearn } from '../../Util/ProjectDetails/ProjectDetails';

function ProjectShowcase () {

  const calculatorInfo = calculator.getProject();
  const todoListInfo = todoList.getProject();
  const whatToLearnInfo = whatToLearn.getProject();

    return (
        <section id="projectShowcase">
          <h2>Projects</h2>
          <div id="showcase">
            <Project title={calculatorInfo.title} src={calculatorInfo.src} desc={calculatorInfo.shortDescription} />
            <Project title={todoListInfo.title} src={todoListInfo.src} desc={todoListInfo.shortDescription} />
            <Project title={whatToLearnInfo.title} src={whatToLearnInfo.src} desc={whatToLearnInfo.shortDescription} />
          </div>
          <button className='moreProjectBtn'>More projects here</button>
      </section>
    )
}

export default ProjectShowcase;