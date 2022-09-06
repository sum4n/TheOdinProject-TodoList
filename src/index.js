// import plusIconDiv from './toDoToggle';
import { formDiv, inputTitle } from './toDoForm';
import taskItemsDiv from './toDoAdd';
import './index.css';
import './toDoEdit';
import projectSelectDiv from './selectProject';

const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.textContent = 'Todo App!';

const appContainer = document.createElement('div');
appContainer.classList.add('appContainer');

const tasksDiv = document.createElement('div');
tasksDiv.classList.add('tasksDiv');
tasksDiv.append(formDiv, taskItemsDiv);

appContainer.append(projectSelectDiv, tasksDiv);

body.append(h1, appContainer);

inputTitle.focus();
