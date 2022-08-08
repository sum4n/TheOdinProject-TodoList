import plusIconImg from './images/plus.png';
import './addToDo.css';

export default function() {
    const plusIconDiv = document.createElement('div');

    const plusIcon = document.createElement('img');
    plusIcon.src = plusIconImg;
    
    plusIconDiv.appendChild(plusIcon);

    return plusIconDiv;
}