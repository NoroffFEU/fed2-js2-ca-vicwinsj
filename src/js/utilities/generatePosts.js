import { postUrl } from "./postUrl.js";
import { updateDate, creationDate } from "./formatDate.js";

export function generatePosts(post) {
  const postContainer = document.createElement("div");
  postContainer.classList.add(
    "flex",
    "flex-col",
    "w-1/2",
    "bg-black",
    "hover:bg-gray-700",
    "text-white",
    "border",
    "rounded-xl",
    "p-3",
    "cursor-pointer"
  );
  postContainer.onclick = function () {
    postUrl(post);
  };

  const byline = document.createElement("div");
  byline.classList.add("flex", "gap-3");

  const avatar = document.createElement("img");
  avatar.src = post.author.avatar.url;
  avatar.classList.add("w-5", "object-contain");

  const author = document.createElement("p");
  author.innerText = "@" + post.author.name;
  author.classList.add("font-bold");

  const date = document.createElement("p");
  if (post.updated === post.created) {
    date.innerText = creationDate(post);
  } else {
    date.innerText = creationDate(post) + " (Edited " + updateDate(post) + ")";
  }

  byline.append(avatar, author, date);

  const body = document.createElement("p");

  body.innerText = post.body;
  body.onclick = function () {
    postUrl(post);
  };

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(
    "w-full",
    "max-h-96",
    "overflow-hidden",
    "flex",
    "items-center",
    "justify-center"
  );

  const img = document.createElement("img");
  img.classList.add("w-full", "object-contain");

  if (post.media && post.media.url) {
    img.src = post.media.url;
    img.alt = post.media.alt || post.media.url;
    imgContainer.append(img);
  }

  postContainer.append(byline, body, imgContainer);
  return postContainer;
}
