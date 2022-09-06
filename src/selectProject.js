import './selectProject.css';

const projectSelectDiv = document.createElement('div');
projectSelectDiv.classList.add('projectSelectDiv');

const projectSelectForm = document.createElement('form');
projectSelectForm.setAttribute('id', 'projectForm');

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

const projectAddBtn = document.createElement('button');
projectAddBtn.textContent = 'Add Project';
projectAddBtn.setAttribute('id', 'projectAddBtn');

const projectDeleteBtn = document.createElement('button');
projectDeleteBtn.textContent = 'Delete Project';
projectDeleteBtn.setAttribute('id', 'projectDeleteBtn');

projectSelectDiv.append(projectSelectForm, projectAddBtn, projectDeleteBtn);

export { projectSelectItems, projectSelectDiv };
