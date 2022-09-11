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

const allProjects = document.createElement('option');
allProjects.setAttribute('value', 'All Projects');
allProjects.textContent = 'All Projects';

const myProjects = document.createElement('option');
myProjects.setAttribute('value', 'My Projects');
myProjects.textContent = 'My Projects';

projectSelectItems.append(allProjects, myProjects);

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
    console.log('hello');
    projectSelectForm.replaceWith(addProjectForm);
    projectAddBtn.textContent = 'Add';
    projectDeleteBtn.textContent = 'Cancel';
  } else if (projectAddBtn.textContent === 'Add' && addProjectForm.value) {
    console.log('hi');
  }
});

projectDeleteBtn.addEventListener('click', () => {
  if (projectDeleteBtn.textContent === 'Delete Project') {
    console.log('Project Deleted');
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
