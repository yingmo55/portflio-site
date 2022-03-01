import projectDetails from "./ProjectDetailsGenerator";
import calculatorPreview from '../../assets/images/previews/calculator.jpg';
import todoListPreview from '../../assets/images/previews/todo-list.jpg';
import whatToLearnPreview from '../../assets/images/previews/Which-language-first.jpg';

//new projectDetails(name, tools=[], previewSrc='', shortDescription, longDescription='');

const calculator = new projectDetails('calculator', ['React.js', 'CSS'], calculatorPreview, 'A calculator app built with React.js')
const todoList = new projectDetails('To-do List', ['React.js', 'CSS'], todoListPreview, 'A todo list app built with React.js')
const whatToLearn = new projectDetails('What to Learn First', ['React.js', 'CSS'], whatToLearnPreview, 'An interactive quiz that helps determing which programming language to learn first, built in React.js')

export {calculator, todoList, whatToLearn};
