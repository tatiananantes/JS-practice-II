/**
 * @jest-environment jsdom
 */
const addNewPost = require('./addNewPost');

 test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});


test('displays a post', () => {
  document.body.innerHTML = `<div class="post" id="post-1">
  A first post
</div>
<div class="post" id="post-2">
  A second post
</div>
<div class="post" id="post-3">
  A third post
</div>`;

  addNewPost('New test post!');
  
  expect(document.querySelectorAll('.post').length).toBe(4);
});