(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo2 = (repoName, callback) => {
        fetch("https://api.github.com/repos/" + repoName).then((response) => response.json()).then((data) => callback(data));
      };
      module.exports = fetchGithubRepo2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchGithubRepo();
  var inputEl = document.querySelector("#repo-name");
  var buttonEl = document.querySelector("#fetch-repo-data");
  buttonEl.addEventListener("click", () => {
    let repoName = inputEl.value;
    fetchGithubRepo(repoName, (data) => {
      updateView(data);
    });
  });
})();
