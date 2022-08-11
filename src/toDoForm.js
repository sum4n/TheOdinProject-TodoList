const taskItemsDiv = document.createElement('div');

const formDiv = document.createElement('form');
formDiv.setAttribute('id', 'qwert');

// first div
const firstFormDiv = document.createElement('div');

const inputTitle = document.createElement('input');
inputTitle.setAttribute('type', 'text');
inputTitle.setAttribute('placeholder', 'name');
inputTitle.setAttribute('id', 'title');

const inputDate = document.createElement('input');
inputDate.setAttribute('type', 'date');
inputDate.setAttribute('id', 'taskDate');

firstFormDiv.append(inputTitle, inputDate);
// first div  ends
// second form div
const secFormDiv = document.createElement('div');

const inputPriority = document.createElement('select');
inputPriority.setAttribute('name', 'Priority');
inputPriority.setAttribute('id', 'priority');

const prioritySet = document.createElement('option');
prioritySet.setAttribute('value', '');
prioritySet.textContent = 'Set Priority';

const priorityLow = document.createElement('option');
priorityLow.setAttribute('value', 'low');
priorityLow.textContent = 'Low';

const priorityMedium = document.createElement('option');
priorityMedium.setAttribute('value', 'medium');
priorityMedium.textContent = 'Medium';

const priorityHigh = document.createElement('option');
priorityHigh.setAttribute('value', 'high');
priorityHigh.textContent = 'High';

inputPriority.append(prioritySet, priorityLow, priorityMedium, priorityHigh);

const formSubmitBtn = document.createElement('input');
formSubmitBtn.setAttribute('type', 'button');
formSubmitBtn.setAttribute('value', 'Add');
formSubmitBtn.setAttribute('id', 'addBtn');

const formCancelBtn = document.createElement('input');
formCancelBtn.setAttribute('type', 'button');
formCancelBtn.setAttribute('value', 'Cancel');
formCancelBtn.setAttribute('id', 'cancelBtn');

secFormDiv.append(inputPriority, formSubmitBtn, formCancelBtn);

formDiv.append(firstFormDiv, secFormDiv);

export {
  formDiv, formCancelBtn, formSubmitBtn, inputTitle, inputDate, inputPriority, taskItemsDiv,
};
