const button = document.querySelector('#button');
const paragraph = document.querySelector('#message');

button.addEventListener('click', () => {
  paragraph.innerText = 'Hello, Jest';
});