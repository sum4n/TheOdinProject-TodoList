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

const defaultProjects = document.createElement('option');
defaultProjects.setAttribute('value', 'Default');
defaultProjects.textContent = 'Default';

// const myProjects = document.createElement('option');
// myProjects.setAttribute('value', 'My Projects');
// myProjects.textContent = 'My Projects';

projectSelectItems.append(defaultProjects);

class Option {
  constructor(projectName) {
    this.projectName = projectName;
  }

  populateProjects() {
    const option = document.createElement('option');
    option.setAttribute('value', this.projectName);
    option.textContent = this.projectName;

    projectSelectItems.append(option);
  }
}

function showOption() {
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    const projectname = key;
    if (projectname === 'Default') {
      return;
    }
    console.log(projectname);
    const projectsOption = new Option(projectname);
    projectsOption.populateProjects();
  });
}

showOption();

// const optionTwo = document.createElement('option');
// optionTwo.setAttribute('value', 'two');
// optionTwo.textContent = 'Project Two';

const projectAddBtn = document.createElement('button');
projectAddBtn.textContent = 'Add Project';
projectAddBtn.setAttribute('id', 'projectAddBtn');

const projectDeleteBtn = document.createElement('button');
projectDeleteBtn.textContent = 'Delete Project';
projectDeleteBtn.setAttribute('id', 'projectDeleteBtn');

const addProjectForm = document.createElement('input');
addProjectForm.setAttribute('type', 'text');
addProjectForm.setAttribute('placeholder', 'Enter Project Name');
addProjectForm.setAttribute('id', 'addProjectForm');

projectAddBtn.addEventListener('click', () => {
  if (projectAddBtn.textContent === 'Add Project') {
    console.log('Project form opened');
    projectSelectForm.replaceWith(addProjectForm);
    projectAddBtn.textContent = 'Add';
    projectDeleteBtn.textContent = 'Cancel';
    addProjectForm.focus();
  } else if (projectAddBtn.textContent === 'Add' && addProjectForm.value) {
    const projectName = projectAddBtn.previousSibling.value;
    console.log(`Project option ${projectName} added`);
    const newProject = new Option(projectName);
    newProject.populateProjects();

    localStorage.setItem(projectName, '');

    addProjectForm.replaceWith(projectSelectForm);
    projectDeleteBtn.textContent = 'Delete Project';
    projectAddBtn.textContent = 'Add Project';
    addProjectForm.value = '';

    projectSelectItems.value = projectName;
  }
});

projectDeleteBtn.addEventListener('click', () => {
  if (projectDeleteBtn.textContent === 'Delete Project') {
    const item = projectSelectItems.value;
    localStorage.removeItem(item);
    console.log(`${item} deleted`);
    document.location.reload();
  } else if (projectDeleteBtn.textContent === 'Cancel') {
    addProjectForm.replaceWith(projectSelectForm);
    projectDeleteBtn.textContent = 'Delete Project';
    projectAddBtn.textContent = 'Add Project';
    addProjectForm.value = '';
  }
});

projectSelectForm.append(projectSelectFormLabel, projectSelectItems);

projectSelectDiv.append(projectSelectForm, projectAddBtn, projectDeleteBtn);

export { projectSelectItems, projectSelectDiv };
