import projectDetails from "./ProjectDetailsGenerator";
import calculatorPreview from '../../assets/images/previews/calculator.jpg';
import todoListPreview from '../../assets/images/previews/todo-list.jpg';
import whatToLearnPreview from '../../assets/images/previews/Which-language-first.jpg';
import sketchHubPreview from '../../assets/images/previews/sketchHub.jpg';

// name, tools=[], previewSrc, shortDescription, longDescription='', liveLink='', codeLink=''

const calculator = projectDetails('calculator', 
                                  ['React.js', 'CSS'], 
                                  calculatorPreview, 
                                  'A calculator app built with React.js',
                                  'https://calculator-96fecd.netlify.app/',
                                  'https://github.com/yingmo55/Calculator' )

const todoList = projectDetails('to-do List', 
                                ['React.js', 'CSS'], 
                                todoListPreview, 
                                'A todo list app built with React.js',
                                'https://tomatodo.netlify.app/',
                                'https://github.com/yingmo55/Todo-List'
                                )
const whatToLearn = projectDetails('what to Learn First', 
                                    ['React.js', 'CSS'], 
                                    whatToLearnPreview, 
                                    'An interactive quiz that helps determing which programming language to learn first, built in React.js',
                                    'https://first-programming-language.netlify.app/',
                                    'https://github.com/yingmo55/which-language-first')

const sketchHub = projectDetails('sketchHub - Responsive Club Page', 
                                    ['HTML', 'CSS'], 
                                    sketchHubPreview, 
                                    'An responsive website built with flexbox and grid',
                                    'https://yingmo55.github.io/Responsive-website-sketchbub/',
                                    'https://github.com/yingmo55/Responsive-website-sketchbub')



export const projects = [ calculator, todoList, whatToLearn, sketchHub];