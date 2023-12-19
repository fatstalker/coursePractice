let div = document.querySelector('body');


let p1 = document.createElement('p');
p1.style.color ='red';
div.appendChild(p1);
p1.textContent = "Hey! I'm red!!"



let p2 = document.createElement('h3');
p2.style.color ='blue';
div.appendChild(p2);
p2.textContent = "I'm a blur h3!"


let container = document.createElement('div');
container.style.cssText = 'border:solid Black; background-color:pink; display:flex; flex-direction:column;';
div.appendChild(container);

let firstContainerElement = document.createElement('h1');
container.appendChild(firstContainerElement);
firstContainerElement.textContent = "I'm in a div";

let secondContainerElement = document.createElement('p');
secondContainerElement.textContent = "Me too!";
container.appendChild(secondContainerElement);


