import SkillDetails from './SkillDetailsGenerator';

import pythonLogo from '../../assets/icons/Skills/python.svg';
import htmlLogo from '../../assets/icons/Skills/html5.svg';
import cssLogo from '../../assets/icons/Skills/css3.svg';
import javaScriptLogo from '../../assets/icons/Skills/js-square.svg';
import reactLogo from '../../assets/icons/Skills/react.svg';
import bootstrapLogo from '../../assets/icons/Skills/bootstrap.svg';


const language = new SkillDetails('Language', 'I can program in...');

language.skills(['HTML', htmlLogo])
language.skills(['CSS', cssLogo])
language.skills(['JavaScript', javaScriptLogo])
language.skills(['python', pythonLogo])

const framework = new SkillDetails('Framework', 'I can use these framework...');
framework.skills(['React', reactLogo]);
framework.skills(['Bootstrap', bootstrapLogo]);

const tools = new SkillDetails('Tool', 'I use these tools and software...');
tools.skills(['Git']);
tools.skills(['Visual Studio Code']);
tools.skills(['Adobe Photoshop']);
tools.skills(['Adobe InDesign']);
tools.skills(['Adobe XD']);


export {language, framework, tools};
