import plusIconImg from './images/plus.png';
import './toggleToDo.css';
import {formDiv, formCancel, formSubmit} from './toDoForm.js';

export default function() {
    const plusIconDiv = document.createElement('div');
    plusIconDiv.setAttribute('id', 'plusIconDiv');

    const plusIcon = document.createElement('img');
    plusIcon.setAttribute('id', 'plusIconImg');
    plusIcon.src = plusIconImg;
    
    plusIcon.addEventListener('click', showForm);

    // plusIconDiv.appendChild(formDiv);

    function showForm() {
        plusIconDiv.removeChild(plusIcon);
        plusIconDiv.appendChild(formDiv);
    };

    plusIconDiv.appendChild(plusIcon)

   formCancel.addEventListener('click', () => {
        plusIconDiv.removeChild(formDiv);
        plusIconDiv.appendChild(plusIcon);
     });

   formSubmit.addEventListener('click', () => {
      let taskName = document.getElementById('title').value;
      let taskDate = document.getElementById('taskDate').value;
      let priority = document.getElementById('priority').value;
      console.log(taskName, taskDate, priority);
    });

    return plusIconDiv;
}