import './index.css';

import {getPosts, deleteUser} from './api/postApi';

getPosts().then(result => {
  let postsBody = "";

  result.forEach(post => {
    postsBody+= `<tr>
      <td><a href="#" data-id="${post.id}" class="deletepost">Delete</a></td>
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
      <td>${post.publishedDate}</td>
      </tr>`
  });

  global.document.getElementById('posts').innerHTML = postsBody;

  const deleteLinks = global.document.getElementsByClassName('deletePost');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deletePost(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
