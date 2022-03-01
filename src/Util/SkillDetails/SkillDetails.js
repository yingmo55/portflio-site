import SkillDetails from './SkillDetailsGenerator';

import pythonLogo from '../../assets/icons/Skills/python.svg';
import htmlLogo from '../../assets/icons/Skills/html5.svg';
import cssLogo from '../../assets/icons/Skills/css3.svg';
import javaScriptLogo from '../../assets/icons/Skills/js-square.svg';
import reactLogo from '../../assets/icons/Skills/react.svg';
import bootstrapLogo from '../../assets/icons/Skills/bootstrap.svg';


const languageClass = new SkillDetails('Languages', 'I can program in...');

languageClass.skills = ['HTML', htmlLogo];
languageClass.skills = ['CSS', cssLogo];
languageClass.skills = ['JavaScript', javaScriptLogo];
languageClass.skills = ['python', pythonLogo];

const frameworkClass = new SkillDetails('Frameworks', 'I can use these framework...');
frameworkClass.skills = ['React', reactLogo]
frameworkClass.skills = ['Bootstrap', bootstrapLogo]

const toolsClass = new SkillDetails('Tools', 'I use these tools and software...');
toolsClass.skills = ['Git']
toolsClass.skills = ['Visual Studio Code']
toolsClass.skills = ['Adobe Photoshop']
toolsClass.skills = ['Adobe InDesign']
toolsClass.skills = ['Adobe XD']

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

export {language, framework, tools};
