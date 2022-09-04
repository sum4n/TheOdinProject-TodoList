// Making use of parent sibling selectors
// Listening to event on full document.
document.addEventListener('click', (e) => {
  //   console.log(e);
  //   console.log(e.target.nextSibling.id);
  //   If event target has a sibling and
  //   its name is  'taskTitle', act on it.
  if (e.target.nextSibling && e.target.nextSibling.id === 'taskTitle') {
    const obj = {
      taskDone: e.target.checked,
      name: e.target.nextSibling.textContent,
      date: e.target.nextSibling.nextSibling.textContent,
      pri: e.target.nextSibling.nextSibling.nextSibling.textContent,
      keyName: e.target.parentNode.id,
    };

    if (e.target.checked) {
      e.target.nextSibling.style.setProperty('text-decoration', 'line-through');
      localStorage.setItem(e.target.parentNode.id, JSON.stringify(obj));
      e.target.nextSibling.nextSibling.nextSibling.nextSibling.disabled = true;

      // console.log(e.target.parentNode.id);
      // console.log(
      //   e.target.nextSibling.value,
      //   e.target.nextSibling.nextSibling.textContent,
      //   e.target.nextSibling.nextSibling.nextSibling.textContent
      // );

      // console.log(localStorage.getItem(e.target.parentNode.id));
      // console.log(e.target.nextSibling.nextSibling.nextSibling.nextSibling);
    } else {
      e.target.nextSibling.style.setProperty('text-decoration', 'none');
      localStorage.setItem(e.target.parentNode.id, JSON.stringify(obj));
      e.target.nextSibling.nextSibling.nextSibling.nextSibling.disabled = false;

      // console.log(localStorage.getItem(e.target.parentNode.id));
    }
  }

  if (e.target.id === 'taskDel' && e.target.value === 'Delete') {
    // console.log(e.target.parentNode.id);
    // console.log(e.target);
    e.target.parentNode.remove();
    localStorage.removeItem(e.target.parentNode.id);
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
    const name = e.target.previousSibling.previousSibling.previousSibling.value;
    const date = e.target.previousSibling.previousSibling.value;
    const pri = e.target.previousSibling.value;
    const keyName = e.target.parentNode.id;
    // console.log(name, date, pri, keyName);
    const objTask = { taskDone: false, name, date, pri, keyName };
    localStorage.setItem(keyName, JSON.stringify(objTask));
    // console.log(localStorage);
    // Reload the page to display change. CHEAT or BRILLIANCE?
    document.location.reload();
  }
  if (e.target.id === 'taskCancel' && e.target.value === 'Cancel') {
    document.location.reload();
  }
});

// export default taskCheck;
