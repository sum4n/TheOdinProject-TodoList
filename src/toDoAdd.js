import {
  formDiv,
  formSubmitBtn,
  inputTitle,
  inputDate,
  inputPriority,
  dateToday,
  taskItemsDiv,
} from './toDoForm';
// import { plusIconDiv, plusIcon } from './toDoToggle';
import './toDoAdd.css';

class Task {
  constructor(taskName, taskDate, taskPriority, keyName) {
    this.taskName = taskName;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
    this.keyName = keyName;
  }

  addToDom() {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskDiv.setAttribute('id', this.keyName);

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

// function showAddIcon() {
//   plusIconDiv.removeChild(formDiv);
//   plusIconDiv.appendChild(plusIcon);
// }

function addLocalStorage(name, date, pri) {
  // Add key to identify task. Timestamp as key to sort tasks.
  let keyName = Date.now();

  const obj = { name, date, pri, key: keyName };
  localStorage.setItem(keyName, JSON.stringify(obj));
  keyName += 1;
}

function getLocalStorage() {
  // sort the keys, because object has no order. Then loop.
  const keys = Object.keys(localStorage).sort();
  keys.forEach((key) => {
    const task = JSON.parse(localStorage.getItem(key));
    // console.log(task);

    const toDoTask = new Task(task.name, task.date, task.pri, task.key);
    toDoTask.addToDom();
  });
}

function addToDo() {
  const taskName = inputTitle.value;
  const taskDate = inputDate.value;
  const priorityId = inputPriority.id;
  const taskPriority = document.getElementById(priorityId).value;
  const key = localStorage.length + 1;
  const keyName = `item${key}`;

  if (taskName) {
    const addTask = new Task(taskName, taskDate, taskPriority, keyName);
    addTask.addToDom();
    addLocalStorage(taskName, taskDate, taskPriority);
    resetForm();
    // showAddIcon();
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
  inputTitle.focus();
});

// // dummy data
// function addDummyToLocalStorage() {
//   const dObj = {
//     name: 'Dummy Task',
//     date: '2022-08-22',
//     pri: 'High',
//     key: '00',
//   };
//   localStorage.setItem('00', JSON.stringify(dObj));
// }
// addDummyToLocalStorage();

// Get tasks from localStorage and add to dom.
// getLocalStorage();
if (localStorage.length > 0) {
  getLocalStorage();
}

export default taskItemsDiv;
