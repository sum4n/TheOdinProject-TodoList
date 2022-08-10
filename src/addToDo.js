import plusIconImg from './images/plus.png';
import './addToDo.css';
import formDiv from './toDoForm';

export default function() {
    const plusIconDiv = document.createElement('div');
    plusIconDiv.setAttribute('id', 'plusIconDiv');

    const plusIcon = document.createElement('img');
    plusIcon.setAttribute('id', 'plusIconImg');
    plusIcon.src = plusIconImg;
    
    plusIcon.addEventListener('click', showForm);

    // plusIconDiv.appendChild(formDiv());

    function showForm() {
        plusIconDiv.removeChild(plusIcon);
        plusIconDiv.appendChild(formDiv());
        showPlusIcon();
        getFromValue();
    };

    plusIconDiv.appendChild(plusIcon)

   function showPlusIcon() {
     let cancelButton = document.getElementById('cancelBtn');
     cancelButton.addEventListener('click', () => {
        const formDiv = document.getElementById('qwert');
        plusIconDiv.removeChild(formDiv);
        plusIconDiv.appendChild(plusIcon);
     });
   };

   function getFromValue() {
    let addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', () => {
      // e.preventDefault();
      let taskName = document.getElementById('title').value;
      let taskDate = document.getElementById('taskDate').value;
      let priority = document.getElementById('priority').value;
      console.log(taskName, taskDate, priority);
    });
   }

    return plusIconDiv;
}