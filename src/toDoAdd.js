import {formSubmitBtn, inputTitle } from "./toDoForm";

let taskName = inputTitle.value;
// let taskDate = document.getElementById('taskDate').value;
// let priority = document.getElementById('priority').value;
formSubmitBtn.addEventListener('click', () => {
  console.log(taskName);
})

export {taskName};