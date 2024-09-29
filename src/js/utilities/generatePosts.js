import { postUrl } from "./postUrl.js";

export function generatePosts(post) {
  const postContainer = document.createElement("div");
  //   postContainer.className = "index-grid-item";

  const contentContainer = document.createElement("div");
  //   contentContainer.classList = "blog-post-content";

  const imgContainer = document.createElement("div");
  //   imgContainer.className = "index-grid-item--img";
  const img = document.createElement("img");
  img.src = post.media.url;
  img.alt = post.media.alt;
  img.onclick = function () {
    postUrl(post);
  };

  const title = document.createElement("p");
  //   title.className = "m-font letter-spacing";
  title.innerText = post.title;
  title.onclick = function () {
    postUrl(post);
  };

  const buttonsContainer = document.createElement("div");
  //   buttonsContainer.className = "blog-links";

  const readButton = document.createElement("a");
  //   readButton.className = "cta cta-blue";
  readButton.innerText = "Read";
  readButton.href = `post/index.html?id=${post.id}`;

  const editButton = document.createElement("a");
  //   editButton.className = "cta cta-gold hide";
  editButton.innerText = "Edit";
  editButton.href = `post/edit.html?id=${post.id}`;

  imgContainer.append(img);
  buttonsContainer.append(editButton, readButton);
  contentContainer.append(imgContainer, title);
  postContainer.append(contentContainer, buttonsContainer);
  toggleEditButton(editButton);
  return postContainer;
}
