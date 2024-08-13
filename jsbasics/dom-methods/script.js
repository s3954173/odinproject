
// your JavaScript file
const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.textContent = "Hey I'm red!";
redText.style.cssText = "color: red";
container.appendChild(redText);

const blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.cssText = "color: blue";
container.appendChild(blueHeader);

const blackpinkDiv = document.createElement('div');
blackpinkDiv.classList.add('blackpinkDiv');
blackpinkDiv.style.cssText = "border: 1px solid black; background-color: pink";

const blackpinkH1 = document.createElement('h1');
blackpinkH1.textContent = "I'm in a div";
blackpinkH1 .style.cssText = "color: black";
blackpinkDiv.appendChild(blackpinkH1);

const blackpinkText = document.createElement('p');
blackpinkText.textContent = "ME TOO!";
blackpinkText.style.cssText = "color: black";
blackpinkDiv.appendChild(blackpinkText);

container.appendChild(blackpinkDiv);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
