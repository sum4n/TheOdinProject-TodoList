import {
  formDiv,
  formSubmitBtn,
  inputTitle,
  inputDate,
  inputPriority,
  dateToday,
  taskItemsDiv,
} from './toDoForm';
import { projectSelectItems } from './selectProject';
import './toDoAdd.css';

class Task {
  constructor(taskDone, taskName, taskDate, taskPriority, keyName) {
    this.taskDone = taskDone;
    this.taskName = taskName;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
    this.keyName = keyName;
  }

  addToDom() {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    // Associate div with the task's localstorage key.
    taskDiv.setAttribute('id', this.keyName);

    const taskDone = document.createElement('input');
    taskDone.setAttribute('type', 'checkbox');
    taskDone.checked = this.taskDone;
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

    if (taskDone.checked) {
      taskTitle.style.setProperty('text-decoration', 'line-through');
      taskEdit.disabled = true;
    }

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

function addLocalStorage(taskDone, name, date, pri, keyName, projectName) {
  const obj = { taskDone, name, date, pri, keyName, projectName };
  let taskList = [];
  if (!localStorage.getItem(projectName)) {
    taskList.push(obj);
    // console.log(JSON.stringify(taskList));
    localStorage.setItem(projectName, JSON.stringify(taskList));
  } else {
    taskList = JSON.parse(localStorage.getItem(projectName));
    // console.log(taskList);
    taskList.push(obj);
    localStorage.setItem(projectName, JSON.stringify(taskList));
  }
}

function getLocalStorage() {
  console.log(projectSelectItems.value);
  if (projectSelectItems.value) {
    const key = projectSelectItems.value;
    // Empty the taskItemsDiv, before putting taskDiv.
    while (taskItemsDiv.lastChild) {
      taskItemsDiv.removeChild(taskItemsDiv.lastChild);
    }
    if (localStorage.getItem(key)) {
      const tasksArray = JSON.parse(localStorage.getItem(key));
      tasksArray.forEach((task) => {
        const toDoTask = new Task(
          task.taskDone,
          task.name,
          task.date,
          task.pri,
          task.keyName
        );
        toDoTask.addToDom();
      });
    }
  }
}

function addToDo() {
  const taskDone = false;
  const taskName = inputTitle.value;
  const taskDate = inputDate.value;
  const priorityId = inputPriority.id;
  const taskPriority = document.getElementById(priorityId).value;
  // Add key to identify task. Timestamp as key to sort tasks.
  // keyName becomes id of the task div.
  const keyName = Date.now();
  const projectName = projectSelectItems.value;

  if (taskName) {
    const addTask = new Task(
      taskDone,
      taskName,
      taskDate,
      taskPriority,
      keyName
    );
    addTask.addToDom();
    addLocalStorage(
      taskDone,
      taskName,
      taskDate,
      taskPriority,
      keyName,
      projectName
    );
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

projectSelectItems.addEventListener('change', () => {
  getLocalStorage();
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

export { getLocalStorage, taskItemsDiv };
