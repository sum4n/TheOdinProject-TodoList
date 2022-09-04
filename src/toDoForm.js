import './toDoForm.css';

const taskItemsDiv = document.createElement('div');
taskItemsDiv.classList.add('taskItemsDiv');

const formDiv = document.createElement('form');
formDiv.setAttribute('id', 'qwert');

// first div
const firstFormDiv = document.createElement('div');
firstFormDiv.setAttribute('id', 'firstFormDiv');

const inputTitle = document.createElement('input');
inputTitle.setAttribute('type', 'text');
inputTitle.setAttribute('placeholder', 'Task Name');
inputTitle.setAttribute('id', 'title');

const inputDate = document.createElement('input');
inputDate.setAttribute('type', 'date');
inputDate.setAttribute('id', 'taskDate');

const dateToday = new Date().toJSON().slice(0, 10);
inputDate.setAttribute('value', dateToday);

const inputPriority = document.createElement('select');
inputPriority.setAttribute('name', 'Priority');
inputPriority.setAttribute('id', 'priority');

const priorityLow = document.createElement('option');
priorityLow.setAttribute('value', 'Low');
priorityLow.textContent = 'Low';

const priorityMedium = document.createElement('option');
priorityMedium.setAttribute('value', 'Medium');
priorityMedium.textContent = 'Medium';

const priorityHigh = document.createElement('option');
priorityHigh.setAttribute('value', 'High');
priorityHigh.textContent = 'High';

inputPriority.append(priorityLow, priorityMedium, priorityHigh);

const formSubmitBtn = document.createElement('input');
formSubmitBtn.setAttribute('type', 'submit');
formSubmitBtn.setAttribute('value', 'Add');
formSubmitBtn.setAttribute('id', 'addBtn');

const formResetBtn = document.createElement('input');
formResetBtn.setAttribute('type', 'button');
formResetBtn.setAttribute('value', 'Reset');
formResetBtn.setAttribute('id', 'resetBtn');

formResetBtn.addEventListener('click', () => {
  inputTitle.value = '';
  inputDate.value = dateToday;
  document.getElementById('priority').value = 'Low';
});

firstFormDiv.append(
  inputTitle,
  inputDate,
  inputPriority,
  formSubmitBtn,
  formResetBtn
);

formDiv.append(firstFormDiv);

export {
  formDiv,
  formResetBtn,
  formSubmitBtn,
  inputTitle,
  inputDate,
  inputPriority,
  taskItemsDiv,
  dateToday,
};
