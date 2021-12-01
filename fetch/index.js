const fetchGithubRepo = require('./fetchGithubRepo');
const view = require('./view');

const inputEl = document.querySelector('#repo-name');
const buttonEl = document.querySelector('#fetch-repo-data');

buttonEl.addEventListener('click', () => {
  let repoName = inputEl.value;
  fetchGithubRepo(repoName, (data) => {
    view(data);
  }); 
});