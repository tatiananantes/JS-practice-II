/**
 * @jest-environment jsdom
 */

 test('displays a message after a click', () => {
  // Set up our document body
  // (remember this value "mocks" our HTML page so Jest can use it)
  document.body.innerHTML = `<div>
      <button id="button">Display message</button>
      <p id="message"></p>
    </div>`;
    
    require('./index');

  // Simulate a click on our button
  const button = document.querySelector('#button');
  button.click();

  // And assert that the paragraph's innerText has changed
  expect(document.querySelector('#message').innerText).toBe('Hello, Jest');
});
