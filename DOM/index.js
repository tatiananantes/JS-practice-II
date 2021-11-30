const addNewPost = require('./addNewPost');

const buttonEl = document.querySelector('#add-post-btn');
const inputEl = document.querySelector('input');

buttonEl.addEventListener('click', () => {
  const newTitle = inputEl.value;
  addNewPost(newTitle);
});

// const element = document.querySelector('#post-1');
// element.innerText = 'A first post refreshed by JS';

// const getPostContents = () => {
//   const elements = document.querySelectorAll('div');
//   const contents = [];
//   elements.forEach (element => {
//     contents.push(element.innerText);
//   });
//   return contents;
//   }
