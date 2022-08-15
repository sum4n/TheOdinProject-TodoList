// Making use of parent sibling selectors
// Listening to event on full document.
document.addEventListener('click', (e) => {
  //   console.log(e);
  //   console.log(e.target.nextSibling.id);
  //   If event target has a sibling and
  //   its name is  'taskTitle', act on it.
  if (e.target.nextSibling && e.target.nextSibling.id === 'taskTitle') {
    if (e.target.checked) {
      e.target.nextSibling.style.setProperty('text-decoration', 'line-through');
      //   console.log(e.target.nextSibling.id);
    } else {
      e.target.nextSibling.style.setProperty('text-decoration', 'none');
    }
  }

  if (e.target.id === 'taskDel') {
    // console.log(e.target.parentNode);
    e.target.parentNode.remove();
  }

  if (e.target.id === 'taskEdit' && e.target.value === 'Edit') {
    e.target.value = 'Save';
    console.log(e.target.previousSibling.textContent);

    const editTask = document.createElement('input');
    editTask.setAttribute('type', 'text');
    editTask.setAttribute('id', 'taskTitle');
    editTask.value =
      e.target.previousSibling.previousSibling.previousSibling.textContent;
    e.target.previousSibling.previousSibling.previousSibling.replaceWith(
      editTask
    );

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
  }
});

// export default taskCheck;
