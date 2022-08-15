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

    const taskTitle = document.createElement('p');
    taskTitle.textContent = this.taskName;
    taskTitle.setAttribute('id', 'taskTitle');

    const taskDateP = document.createElement('p');
    taskDateP.textContent = this.taskDate;
    taskDateP.setAttribute('id', 'taskDateP');

    const taskPriP = document.createElement('p');
    taskPriP.textContent = this.taskPriority;
    taskPriP.setAttribute('id', 'taskPriP');

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    const taskDel = document.createElement('input');
    taskDel.setAttribute('type', 'button');
    taskDel.setAttribute('value', 'Delete');
    taskDel.setAttribute('id', 'taskDel');

    const taskEdit = document.createElement('input');
    taskEdit.setAttribute('type', 'button');
    taskEdit.setAttribute('value', 'Edit');
    taskEdit.setAttribute('id', 'taskEdit');

    // buttonDiv.append(taskEdit, taskDel);

    taskDiv.append(taskTitle, taskDateP, taskPriP, taskEdit, taskDel);

    taskItemsDiv.append(taskDiv);
  }
}

function resetForm() {
  inputTitle.value = '';
  inputDate.value = dateToday;
  document.getElementById('priority').value = '';
}

function showAddIcon() {
  plusIconDiv.removeChild(formDiv);
  plusIconDiv.appendChild(plusIcon);
}

function addToDo() {
  const taskName = inputTitle.value;
  let taskDate = inputDate.value;
  const priorityId = inputPriority.id;
  let taskPriority = document.getElementById(priorityId).value;

  if (!taskDate) {
    taskDate = 'No due date';
  }

  if (!taskPriority) {
    taskPriority = 'None';
  }

  if (taskName) {
    const addTask = new Task(taskName, taskDate, taskPriority);
    addTask.addToDom();
    resetForm();
    showAddIcon();
  }

  // eslint-disable-next-line no-console
  console.log(taskName, taskDate, taskPriority);
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
const myTask = new Task("Hello! I'm a task.", dateToday, 'High');
myTask.addToDom();

export default taskItemsDiv;
