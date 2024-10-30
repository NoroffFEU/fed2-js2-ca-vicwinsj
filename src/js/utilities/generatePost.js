import { updateDate, creationDate } from "./formatDate.js";
import { accessToken } from "../api/auth/key.js";
import { editPostUrl } from "./postUrl.js";

export async function generatePostContent(post) {
  document.title = `${post.title}`;

  //   const heading = document.getElementById("post-heading");
  //   heading.innerText = post.title;

  if (post.author && post.author.name) {
    const author = document.getElementById("post-author");
    author.innerText = post.author.name;
  }

  const publishedDate = document.getElementById("post-date");
  if (post.updated !== post.created) {
    publishedDate.innerText = updateDate(post);
  } else {
    publishedDate.innerText = creationDate(post);
  }

  const body = document.getElementById("post-body");
  body.innerText = post.body;

  if (post.media.url) {
    const img = document.getElementById("post-img");
    img.src = post.media.url;
    if (post.media.alt) {
      img.alt = post.media.alt;
    } else img.alt = "No image description found";
  }

  if (accessToken) {
    const editButton = document.getElementById("edit-button");
    editButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = editPostUrl(post);
    });
  }

  //   editButton.href = `edit/index.html?id=${post.id}`;

  //   const tagsContainer = document.getElementById("tags");
  //   const tags = post.tags;
  //   tags.forEach((tag) => {
  //     const tagElement = document.createElement("p");
  //     tagElement.innerText = tag;
  //     tagsContainer.appendChild(tagElement);
  //   });
}
