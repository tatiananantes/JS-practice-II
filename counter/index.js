let counter = 0;
const counterEl = document.querySelector('#counter');
const incrementButtonEl = document.querySelector('#inc-button');

incrementButtonEl.addEventListener('click', () =>{
  counter += 1;
  counterEl.innerText = counter;
});
