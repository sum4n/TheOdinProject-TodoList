// Listening to event on full document.
document.addEventListener('click', (e) => {
  //   console.log(e);
  //   console.log(e.target.nextSibling.id);
  //   If event target's sibling is 'taskTitle', act on it.
  if (e.target.nextSibling && e.target.nextSibling.id === 'taskTitle') {
    if (e.target.checked) {
      e.target.nextSibling.style.setProperty('text-decoration', 'line-through');
      //   console.log(e.target.nextSibling.id);
    } else {
      e.target.nextSibling.style.setProperty('text-decoration', 'none');
    }
  }
});

// export default taskCheck;
