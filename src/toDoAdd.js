import {formSubmitBtn, inputTitle, inputDate, inputPriority, taskItemsDiv } from "./toDoForm";

formSubmitBtn.addEventListener('click', () => {
  let taskName = inputTitle.value;
  let taskDate = inputDate.value;
  let priorityId = inputPriority.id;
  let taskPriority = document.getElementById(priorityId).value;

  if (taskName) {
    let addTask = new Task(taskName, taskDate, taskPriority);
    addTask.addToDom();
  }
  
  console.log(taskName, taskDate, taskPriority);
})

class Task {
  constructor (taskName, taskDate, taskPriority) {
    this.taskName = taskName;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
  }
  addToDom() {
    const taskDiv = document.createElement('div')

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
