/*
const container = document.querySelector('container');
//Selects the #container div

console.dir(container.firstElementChild);
//Selects the first child of #countainer => .content

const content = document.querySelector('.content');
//Selects the .controls div

console.dir(content.previousElementSibling);
//Selects the previous sibling of .content => .container

const div = document.createElement('div');
//Creates a new div element in memory
div.style.color = 'blue';
//Sets the color of the div to blue
div.style.ccsText = 'color: blue; background-color: white;';
//adds several style rules
div.setAttribute('style', 'color: blue; background-color: white;');
//ads several style rules

*/
const container = document.querySelector('#container');
//selects the #container div

const content = document.createElement('div');
//creates a new div element in memory

content.classList.add('content');
//adds the class .content to the div

const para = document.createElement('p');
//creates a new p element in memory

para.textContent = 'Hey I am red!';
para.style.color = 'red';
//sets the text content and color of the p element

content.appendChild(para);
//adds the p element to the .content div
const h3 = document.createElement('h3');
//creates a new h3 element in memory

h3.textContent = 'I am a blue h3!';
h3.setAttribute('style','color: blue;');
//sets the text content and color of the h3 element

content.appendChild(h3);
//adds the h3 element to the .content div

const div = document.createElement('div');
div.setAttribute('style','border: 1px solid black; background-color: pink;');
//creates a new div element in memory and sets the style

const h1 = document.createElement('h1');
h1.textContent = 'I am in a div';
//creates a new h1 element in memory and sets the text content

div.appendChild(h1);
//adds the h1 element to the div
const p = document.createElement('p');
p.textContent = 'ME TOO!';
//creates a new p element in memory and sets the text content

div.appendChild(p);
//adds the p element to the div
content.appendChild(div);
//adds the div to the .content div

container.appendChild(content);
//adds the .content div to the #container div

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World!");
});