import { authGuard } from "../../utilities/authGuard.js";
import { post } from "../../utilities/fetchPost.js";

authGuard();

const editTitle = document.getElementById("edit-title");
const editBody = document.getElementById("edit-body");

function generateEditPostContent(post) {
  document.title = `Editing "${post.title}" | Spasiba`;

  const backToPost = document.getElementById("back-to-post");
  backToPost.href = `index.html?id=${post.id}`;

  const headingTitle = document.getElementById("post-title");
  headingTitle.innerText = post.title;

  editTitle.value = post.title;

  editBody.value = post.body;

  const img = document.getElementById("edit-img");
  img.src = post.media.url;
  img.alt = post.media.alt;

  const uploadImgLink = document.getElementById("upload-img-link");
  const urlFieldset = document.getElementById("url-fieldset");
  urlInput.value = post.media.url;

  const altFieldset = document.getElementById("alt-fieldset");
  altInput.value = post.media.alt;

  uploadImgLink.addEventListener("click", () =>
    showImgInputs(uploadImgLink, urlFieldset, altFieldset)
  );
}

generateEditPostContent(post);
