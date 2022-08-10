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
   

    return plusIconDiv;
}