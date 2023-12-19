const list = document.querySelector('ul');
let input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',pressButton );

function pressButton() {
    let submittedInput = document.querySelector('input').value;
    createListElement(submittedInput);
    input.value = '';
    input.focus();
};


function createListElement(ThisIsToPracticeOperatingFunctions) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let deleteButton = document.createElement('button');
    span.textContent = ThisIsToPracticeOperatingFunctions;
    deleteButton.textContent = 'Delete';
    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteButton);
    deleteButton.classList.toggle('deleteButton');                                
    deleteButton.addEventListener('click', deleteListElement);
    function deleteListElement() {
        list.removeChild(li);
    }
};
