import SkillDetails from './SkillDetailsGenerator';

import { faPython, faHtml5, faCss3, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';


const languageClass = new SkillDetails('Languages', 'I can code in...');
    languageClass.skills = ['JavaScript', faJsSquare];
    languageClass.skills = ['HTML', faHtml5];
    languageClass.skills = ['CSS', faCss3];
    languageClass.skills = ['Python', faPython];

const frameworkClass = new SkillDetails('Frameworks', 'I use these frameworks...');
    frameworkClass.skills = ['React', faReact];
    frameworkClass.skills = ['Tailwind CSS'];
    frameworkClass.skills = ['Redux', faReact];
    frameworkClass.skills = ['Bootstrap', faBootstrap];
    frameworkClass.skills = ['Jest'];

const toolsClass = new SkillDetails('Tools', 'I use these tools and software for development...');
    toolsClass.skills = ['Git'];
    toolsClass.skills = ['GitHub'];
    toolsClass.skills = ['Netlify'];
    toolsClass.skills = ['PostMan'];
    toolsClass.skills = ['Visual Studio Code'];
    toolsClass.skills = ['Adobe Photoshop'];
    toolsClass.skills = ['Adobe InDesign'];
    toolsClass.skills = ['Adobe XD'];

const language = {
    ...languageClass.titleAndDesc(), 
    skills: languageClass.skills
}

const framework = {
    ...frameworkClass.titleAndDesc(), 
    skills: frameworkClass.skills
}

const tools = {
    ...toolsClass.titleAndDesc(),
    skills: toolsClass.skills
}

export const skillSets = [language, framework, tools];
