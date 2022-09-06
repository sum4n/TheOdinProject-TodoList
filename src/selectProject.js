import './selectProject.css';

const projectSelectDiv = document.createElement('div');
projectSelectDiv.classList.add('projectSelectDiv');

const projectSelectForm = document.createElement('form');

const projectSelectFormLabel = document.createElement('label');
projectSelectFormLabel.setAttribute('for', 'projects');
projectSelectFormLabel.textContent = 'Select Project';

const projectSelectItems = document.createElement('select');
projectSelectItems.setAttribute('name', 'projects');
projectSelectItems.setAttribute('id', 'projects');

const optionDefault = document.createElement('option');
optionDefault.setAttribute('value', 'default');
optionDefault.textContent = 'Default Project';

const optionTwo = document.createElement('option');
optionTwo.setAttribute('value', 'two');
optionTwo.textContent = 'Project Two';

projectSelectItems.append(optionDefault, optionTwo);

projectSelectForm.append(projectSelectFormLabel, projectSelectItems);

projectSelectDiv.appendChild(projectSelectForm);

export { projectSelectItems, projectSelectDiv };
