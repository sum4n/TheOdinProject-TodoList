import { plusIconDiv } from './toDoToggle';
import taskItemsDiv from './toDoAdd';
import './index.css';

const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.textContent = 'Todo App!';

body.appendChild(h1);
body.appendChild(plusIconDiv);
body.appendChild(taskItemsDiv);
