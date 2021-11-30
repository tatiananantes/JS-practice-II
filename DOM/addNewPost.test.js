/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('creates and displays a new post', () => {
  document.body.innerHTML = ` <button id="add-post-btn">Add post</button>
  <div class="post" id="post-1"> A first post </div>
  <div class="post" id="post-2"> A second post </div>
  <div class="post" id="post-3"> A third post </div>`;
  
require('./index');

// simulate a click on a button
  const button = document.querySelector('#add-post-btn');
  button.click();

  // assert we have the new post change
  expect(document.querySelectorAll('.post').length).toBe(4);
});