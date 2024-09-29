import { creationDate, updateDate } from "../../utilities/formatDate.js";

alert("Single Post Page");

async function generatePostContent(post) {
  const imgContainer = document.getElementById("img-container");
  const img = document.createElement("img");
  img.src = post.media.url;
  img.alt = post.media.alt;
  imgContainer.appendChild(img);

  const heading = document.getElementById("post-heading");
  heading.innerText = post.title;

  const author = document.getElementById("author");
  author.innerText = post.comments.author.name;

  const publishedDate = document.getElementById("created");
  publishedDate.innerText = creationDate(post);

  const updatedDate = document.getElementById("updated");
  updatedDate.innerText = updateDate(post);

  isUpdated(post);

  const content = document.getElementById("post-content");
  content.innerText = post.body;

  editButton.href = `edit.html?id=${post.id}`;

  const tagsContainer = document.getElementById("tags");
  const tags = post.tags;
  tags.forEach((tag) => {
    const tagElement = document.createElement("p");
    tagElement.innerText = tag;
    tagsContainer.appendChild(tagElement);
  });
}
