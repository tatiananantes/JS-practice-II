  const addNewPost = (title) => {
    const newPostEl = document.createElement('div');
    const newId = document.querySelectorAll('.post').length + 1;
    
    newPostEl.innerText = title;
    newPostEl.className = 'post';
    newPostEl.id = 'post-' + newId;
    document.body.appendChild(newPostEl);
  }
  
  module.exports = addNewPost;