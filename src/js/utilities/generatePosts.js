import { postUrl } from "./postUrl.js";
import { updateDate, creationDate } from "./formatDate.js";

export function generatePosts(post) {
  const postContainer = document.createElement("div");
  //   postContainer.className = "index-grid-item";

  if (post.author && post.author.name) {
    const author = document.createElement("p");
    author.innerText = post.author.name;
    byline.append(author);
  }

  const date = document.createElement("p");
  if (post.updated === post.created) {
    date.innerText = creationDate(post);
  } else {
    date.innerText = creationDate(post) + " (Edited " + updateDate(post) + ")";
  }

  const body = document.createElement("p");
  //   title.className = "m-font letter-spacing";
  body.innerText = post.body;
  body.onclick = function () {
    postUrl(post);
  };

  const imgContainer = document.createElement("div");
  //   imgContainer.className = "index-grid-item--img";

  const img = document.createElement("img");

  if (post.media && post.media.url) {
    img.src = post.media.url;
    img.alt = post.media.alt || "No description available";
    img.onclick = function () {
      postUrl(post);
    };
    imgContainer.append(img);
  }

  const byline = document.createElement("div");
  byline.append(date);

  postContainer.append(byline, body, imgContainer);
  return postContainer;
}
