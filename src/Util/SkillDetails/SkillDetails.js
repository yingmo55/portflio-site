import SkillDetails from './SkillDetailsGenerator';

import pythonLogo from '../../assets/icons/Skills/python.svg';
import htmlLogo from '../../assets/icons/Skills/html5.svg';
import cssLogo from '../../assets/icons/Skills/css3.svg';
import javaScriptLogo from '../../assets/icons/Skills/js-square.svg';
import reactLogo from '../../assets/icons/Skills/react.svg';
import bootstrapLogo from '../../assets/icons/Skills/bootstrap.svg';


const languageClass = new SkillDetails('Languages', 'I can code in...');
languageClass.skills = ['JavaScript', javaScriptLogo];
languageClass.skills = ['HTML', htmlLogo];
languageClass.skills = ['CSS', cssLogo];
languageClass.skills = ['python', pythonLogo];

const frameworkClass = new SkillDetails('Frameworks', 'I can use these framework...');
frameworkClass.skills = ['React', reactLogo]
frameworkClass.skills = ['Bootstrap', bootstrapLogo]
frameworkClass.skills = ['Jest']

const toolsClass = new SkillDetails('Tools', 'I use these tools for development...');
toolsClass.skills = ['Git']
toolsClass.skills = ['GitHub']
toolsClass.skills = ['Netlify']

const softwareClass = new SkillDetails('Software', 'I use these Software...');
softwareClass.skills = ['Visual Studio Code']
softwareClass.skills = ['PostMan']
softwareClass.skills = ['Adobe Photoshop']
softwareClass.skills = ['Adobe InDesign']
softwareClass.skills = ['Adobe XD']

const language = {
    ...languageClass.getSkills(), 
    skills: languageClass.skills
}

const framework = {
    ...frameworkClass.getSkills(), 
    skills: frameworkClass.skills
}

const tools = {
    ...toolsClass.getSkills(),
    skills: toolsClass.skills
}

const Software = {
    ...softwareClass.getSkills(),
    skills: softwareClass.skills
}

export {language, framework, tools, Software} ;
