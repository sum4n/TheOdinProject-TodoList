// Making use of parent sibling selectors
// Listening to event on full document.
document.addEventListener('click', (e) => {
  // Listen events only in taskItemsDiv div.
  if (
    e.target.parentNode.parentNode &&
    e.target.parentNode.parentNode.className === 'taskItemsDiv'
  ) {
    // console.log(e.target.parentNode.parentNode.className);
    const projectName = document.getElementById('projects').value;
    // Get e.parentNode's index.
    const taskDivs = document.querySelectorAll('.taskDiv');
    const taskDivsList = Array.from(taskDivs);
    const taskIndex = taskDivsList.indexOf(e.target.parentNode);
    //   console.log(e);
    //   console.log(e.target.nextSibling.id);
    //   If event target has a sibling and
    //   its name is  'taskTitle', act on it.
    if (e.target.nextSibling && e.target.nextSibling.id === 'taskTitle') {
      if (e.target.checked) {
        e.target.nextSibling.style.setProperty(
          'text-decoration',
          'line-through'
        );
        e.target.nextSibling.nextSibling.nextSibling.nextSibling.disabled = true;
        // console.log(e.target.parentNode);

        const tasksList = JSON.parse(localStorage.getItem(projectName));
        tasksList[taskIndex].taskDone = true;
        localStorage.setItem(projectName, JSON.stringify(tasksList));

        // console.log(tasksList[taskIndex].taskDone, tasksList);
      } else {
        e.target.nextSibling.style.setProperty('text-decoration', 'none');
        e.target.nextSibling.nextSibling.nextSibling.nextSibling.disabled = false;

        const tasksList = JSON.parse(localStorage.getItem(projectName));
        tasksList[taskIndex].taskDone = false;
        localStorage.setItem(projectName, JSON.stringify(tasksList));
        // console.log(localStorage.getItem(e.target.parentNode.id));
      }
    }

    if (e.target.id === 'taskDel' && e.target.value === 'Delete') {
      // console.log(e.target.parentNode.id);
      // console.log(e.target);
      e.target.parentNode.remove();
      const tasksList = JSON.parse(localStorage.getItem(projectName));
      tasksList.splice(taskIndex, 1);
      localStorage.setItem(projectName, JSON.stringify(tasksList));
    }

    if (e.target.id === 'taskEdit' && e.target.value === 'Edit') {
      e.target.value = 'Save';
      e.target.nextSibling.value = 'Cancel';
      e.target.nextSibling.id = 'taskCancel';
      // console.log(e.target.parentNode.firstChild);
      // Disable the checkbox on task edit.
      e.target.parentNode.firstChild.disabled = true;

      const editTask = document.createElement('input');
      editTask.setAttribute('type', 'text');
      editTask.setAttribute('id', 'taskTitle');
      editTask.value =
        e.target.previousSibling.previousSibling.previousSibling.textContent;
      e.target.previousSibling.previousSibling.previousSibling.replaceWith(
        editTask
      );
      editTask.focus();

      const editDate = document.createElement('input');
      editDate.setAttribute('type', 'date');
      editDate.setAttribute('id', 'taskDate');
      editDate.setAttribute(
        'value',
        e.target.previousSibling.previousSibling.textContent
      );
      e.target.previousSibling.previousSibling.replaceWith(editDate);

      const editPrio = document.createElement('select');
      editPrio.setAttribute('name', 'Priority');
      editPrio.setAttribute('id', 'priority');

      const priorityLow = document.createElement('option');
      priorityLow.setAttribute('value', 'Low');
      priorityLow.textContent = 'Low';

      const priorityMedium = document.createElement('option');
      priorityMedium.setAttribute('value', 'Medium');
      priorityMedium.textContent = 'Medium';

      const priorityHigh = document.createElement('option');
      priorityHigh.setAttribute('value', 'High');
      priorityHigh.textContent = 'High';

      editPrio.append(priorityLow, priorityMedium, priorityHigh);

      editPrio.value = e.target.previousSibling.textContent;

      e.target.previousSibling.replaceWith(editPrio);
    } else if (e.target.id === 'taskEdit' && e.target.value === 'Save') {
      // console.log(e.target.value);
      const name =
        e.target.previousSibling.previousSibling.previousSibling.value;
      const date = e.target.previousSibling.previousSibling.value;
      const pri = e.target.previousSibling.value;
      const keyName = e.target.parentNode.id;

      const editedTask = {
        taskDone: false,
        name,
        date,
        pri,
        keyName,
        projectName,
      };

      const taskList = JSON.parse(localStorage.getItem(projectName));
      // Replace the original task Object with editedTask Object.
      taskList[taskIndex] = editedTask;
      localStorage.setItem(projectName, JSON.stringify(taskList));

      // Reload the page to display change. CHEAT or BRILLIANCE?
      document.location.reload();
    }
    if (e.target.id === 'taskCancel' && e.target.value === 'Cancel') {
      document.location.reload();
    }
  }
});

// export default taskCheck;
