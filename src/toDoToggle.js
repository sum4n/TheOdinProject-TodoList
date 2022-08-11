import plusIconImg from './images/plus.png';
import './toDoToggle.css';
import {formDiv, formCancelBtn} from './toDoForm';
// need this import for the add button to work
import { taskName, taskDate, priority } from './toDoAdd';

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

   formCancelBtn.addEventListener('click', () => {
        plusIconDiv.removeChild(formDiv);
        plusIconDiv.appendChild(plusIcon);
     });

    return plusIconDiv;
}