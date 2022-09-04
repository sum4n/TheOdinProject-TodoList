const projectsDiv = document.createElement('div');
projectsDiv.classList.add('projectsDiv');

const projectItemsDiv = document.createElement('div');
projectItemsDiv.classList.add('projectItemsDiv');

const titleP = document.createElement('p');
titleP.textContent = 'Projects';

projectItemsDiv.append(titleP);
projectsDiv.appendChild(projectItemsDiv);

export default projectsDiv;
