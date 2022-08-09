export default function() {
    const formDiv = document.createElement('form');

    // first div
    const firstFormDiv = document.createElement('div');

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("placeholder", "name");

    const inputDate = document.createElement('input');
    inputDate.setAttribute("type", "date");

    firstFormDiv.append(inputTitle, inputDate);
    // first div  ends
    // second form div
    const secFormDiv = document.createElement('div');

    const inputPriority = document.createElement('select');
    inputPriority.setAttribute('name', 'Priority');

    const prioritySet = document.createElement('option');
    prioritySet.setAttribute('value', 'Set Prioirity');
    prioritySet.textContent = "Set Priority";

    const priorityLow = document.createElement('option');
    priorityLow.setAttribute('value', 'low');
    priorityLow.textContent = "Low";

    const priorityMedium = document.createElement('option');
    priorityMedium.setAttribute('value', 'medium');
    priorityMedium.textContent = "Medium";

    const priorityHigh = document.createElement('option');
    priorityHigh.setAttribute('value', 'high');
    priorityHigh.textContent = "High";

    inputPriority.append(prioritySet, priorityLow, priorityMedium, priorityHigh);

    const formSubmit = document.createElement('input');
    formSubmit.setAttribute('type', 'submit');
    formSubmit.setAttribute('value', 'Add');

    const formCancle = document.createElement('input');
    formCancle.setAttribute('type', 'button');
    formCancle.setAttribute('value', 'Cancle');
    formCancle.setAttribute('id', 'cancleBtn');

    secFormDiv.append(inputPriority, formSubmit, formCancle);

    formDiv.append(firstFormDiv, secFormDiv);

    return formDiv;
}