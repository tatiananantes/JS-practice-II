// const addNewPost = require('./addNewPost');

const button = document.querySelector('#add-post-btn');
const post = document.querySelectorAll('.post');

button.addEventListener('click', () => {
  addNewPost('Posty Post');
});

const addNewPost = (title) => {
  const newPostEl = document.createElement('div');
  const newId = document.querySelectorAll('.post').length + 1;
  
  newPostEl.innerText = title;
  newPostEl.className = 'post';
  newPostEl.id = 'post-' + newId;
  document.body.appendChild(newPostEl);
}








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