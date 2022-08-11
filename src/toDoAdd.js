import {
  formSubmitBtn, inputTitle, inputDate, inputPriority,
} from './toDoForm';

const taskItemsDiv = document.createElement('div');
class Task {
  constructor(taskName, taskDate, taskPriority) {
    this.taskName = taskName;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
  }

  addToDom() {
    const taskDiv = document.createElement('div');

    const taskTitle = document.createElement('p');
    taskTitle.textContent = this.taskName;

    const taskDateP = document.createElement('p');
    taskDateP.textContent = this.taskDate;

    const taskPriP = document.createElement('p');
    taskPriP.textContent = this.taskPriority;

    taskDiv.append(taskTitle, taskDateP, taskPriP);

    taskItemsDiv.append(taskDiv);
  }
}

formSubmitBtn.addEventListener('click', () => {
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
  }

  console.log(taskName, taskDate, taskPriority);
});

export { taskItemsDiv };
