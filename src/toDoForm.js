export default function() {
    const formDiv = document.createElement('form');
    formDiv.setAttribute('id', 'qwert');

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
    formSubmit.setAttribute('id', 'addBtn');

    const formCancel = document.createElement('input');
    formCancel.setAttribute('type', 'button');
    formCancel.setAttribute('value', 'Cancel');
    formCancel.setAttribute('id', 'cancelBtn');

    secFormDiv.append(inputPriority, formSubmit, formCancel);

    formDiv.append(firstFormDiv, secFormDiv);

    return formDiv;
}