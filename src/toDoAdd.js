import {
  formDiv,
  formSubmitBtn,
  inputTitle,
  inputDate,
  inputPriority,
  dateToday,
  taskItemsDiv,
} from './toDoForm';
import { plusIconDiv, plusIcon } from './toDoToggle';
import './toDoAdd.css';

class Task {
  constructor(taskName, taskDate, taskPriority) {
    this.taskName = taskName;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
  }

  addToDom() {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');

    const taskDone = document.createElement('input');
    taskDone.setAttribute('type', 'checkbox');
    taskDone.setAttribute('value', 'done');
    taskDone.setAttribute('id', 'taskDone');

    const taskTitle = document.createElement('p');
    taskTitle.textContent = this.taskName;
    taskTitle.setAttribute('id', 'taskTitle');

    const taskDateP = document.createElement('p');
    taskDateP.textContent = this.taskDate;
    taskDateP.setAttribute('id', 'taskDateP');

    const taskPriP = document.createElement('p');
    taskPriP.textContent = this.taskPriority;
    taskPriP.setAttribute('id', 'taskPriP');

    const taskDel = document.createElement('input');
    taskDel.setAttribute('type', 'button');
    taskDel.setAttribute('value', 'Delete');
    taskDel.setAttribute('id', 'taskDel');
    taskDel.classList.add('buttons');

    const taskEdit = document.createElement('input');
    taskEdit.setAttribute('type', 'button');
    taskEdit.setAttribute('value', 'Edit');
    taskEdit.setAttribute('id', 'taskEdit');
    taskEdit.classList.add('buttons');

    taskDiv.append(taskDone, taskTitle, taskDateP, taskPriP, taskEdit, taskDel);

    taskItemsDiv.append(taskDiv);
  }
}

function resetForm() {
  inputTitle.value = '';
  inputDate.value = dateToday;
  document.getElementById('priority').value = 'Low';
}

function showAddIcon() {
  plusIconDiv.removeChild(formDiv);
  plusIconDiv.appendChild(plusIcon);
}

function addLocalStorage(name, date, pri) {
  const itemNum = localStorage.length + 1;
  const obj = { name, date, pri };
  localStorage.setItem(`item${itemNum}`, JSON.stringify(obj));
}

function getLocalStorage() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < localStorage.length + 1; i++) {
    if (localStorage.getItem(`item${i + 1}`)) {
      const task = JSON.parse(localStorage.getItem(`item${i + 1}`));
      // console.log(task);

      const toDoTask = new Task(task.name, task.date, task.pri);
      toDoTask.addToDom();
    }
  }
}

function addToDo() {
  const taskName = inputTitle.value;
  const taskDate = inputDate.value;
  const priorityId = inputPriority.id;
  const taskPriority = document.getElementById(priorityId).value;

  if (taskName) {
    const addTask = new Task(taskName, taskDate, taskPriority);
    addTask.addToDom();
    addLocalStorage(taskName, taskDate, taskPriority);
    resetForm();
    showAddIcon();
    // console.log(localStorage);
  }
  // console.log(taskName, taskDate, taskPriority);
}

formDiv.addEventListener('submit', (e) => {
  e.preventDefault();
  addToDo();
});

formSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addToDo();
});

// dummy data
function addDummyToLocalStorage() {
  const dObj = { name: 'Task1', date: '2022-08-22', pri: 'High' };
  localStorage.setItem('item1', JSON.stringify(dObj));
}
addDummyToLocalStorage();

// Get tasks from localStorage and add to dom.
getLocalStorage();

export default taskItemsDiv;
