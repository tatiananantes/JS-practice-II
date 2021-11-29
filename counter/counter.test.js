/**
 * @jest-environment jsdom
 */

 test('displays a counter after a click', () => {
  // Set up our document body
  // (remember this value "mocks" our HTML page so Jest can use it)
  document.body.innerHTML = `<span id="counter">0</span>
  <button id="inc-button">Increment</button>`;

    require('./index');

  // Simulate a click on our button
  const button = document.querySelector('#inc-button');
  button.click();
  button.click();

  // And assert that the counter text has changed 
  expect(document.querySelector('#counter').innerText).toBe(2);
});
