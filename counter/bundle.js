(() => {
  // index.js
  var counter = 0;
  var counterEl = document.querySelector("#counter");
  var incrementButtonEl = document.querySelector("#inc-button");
  incrementButtonEl.addEventListener("click", () => {
    counter += 1;
    counterEl.innerText = counter;
  });
})();
