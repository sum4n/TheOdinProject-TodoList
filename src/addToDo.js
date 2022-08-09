import plusIconImg from './images/plus.png';
import './addToDo.css';
import formDiv from './addToDoForm';

export default function() {
    const plusIconDiv = document.createElement('div');

    const plusIcon = document.createElement('img');
    plusIcon.src = plusIconImg;
    
    plusIcon.addEventListener('click', () => {
        alert("hello");
    });

    plusIconDiv.appendChild(formDiv());

    plusIconDiv.appendChild(plusIcon);

    return plusIconDiv;
}