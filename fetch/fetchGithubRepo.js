const fetchGithubRepo = (repoName, callback) => {
  fetch('https://api.github.com/repos/' + repoName)
    .then(response => response.json())
    .then(data => callback(data));
}

module.exports = fetchGithubRepo;