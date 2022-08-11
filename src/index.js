import toDoToggle from './toDoToggle';
import taskItemsDiv from './toDoAdd';

const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.textContent = 'Todo App!';

body.appendChild(h1);
body.appendChild(toDoToggle());
body.appendChild(taskItemsDiv);
