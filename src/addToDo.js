import plusIconImg from './images/plus.png';
import './addToDo.css';
import formDiv from './addToDoForm';

export default function() {
    const plusIconDiv = document.createElement('div');

    const plusIcon = document.createElement('img');
    plusIcon.src = plusIconImg;
    
    plusIcon.addEventListener('click', showForm);

    plusIconDiv.appendChild(formDiv());

    function showForm() {
        plusIconDiv.removeChild(plusIcon);
        plusIconDiv.appendChild(formDiv());
    }

    plusIconDiv.appendChild(plusIcon);

    return plusIconDiv;
}