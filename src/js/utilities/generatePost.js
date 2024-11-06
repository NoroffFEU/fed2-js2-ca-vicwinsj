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

  const commentsContainer = document.getElementById("comments");
  commentsContainer.classList.add("mt-4", "bg-gray-800", "p-3", "rounded-lg");

  const commentForm = document.createElement("form");
  commentForm.classList.add("flex");

  const commentsTitle = document.createElement("p");
  commentsTitle.classList.add("font-semibold", "text-lg", "text-gray-400");
  commentsTitle.innerText = "Comments";
  commentsContainer.appendChild(commentsTitle);

  post.comments.forEach((comment) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("mt-2", "p-2", "bg-gray-900", "rounded");

    const commentAuthor = document.createElement("p");
    commentAuthor.classList.add("text-sm", "font-bold", "text-gray-300");
    commentAuthor.innerText = "@" + comment.author.name;

    const commentBody = document.createElement("p");
    commentBody.classList.add("text-sm", "text-gray-200");
    commentBody.innerText = comment.body;

    commentContainer.append(commentAuthor, commentBody);
    commentsContainer.append(commentContainer);
  });

  const textarea = document.createElement("textarea");
  textarea.classList.add(
    "z-10",
    "w-full",
    "bg-black",
    "text-white",
    "resize-none",
    "p-3",
    "h-11"
  );
  textarea.placeholder = "Make a comment";
  textarea.onclick = "event.stopPropagation()";
  const button = document.createElement("button");
  button.innerText = "Post";
  textarea.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  button.classList = "btn";
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
  commentForm.append(textarea, button);

  const reactionsContainer = document.createElement("div");
  reactionsContainer.classList.add("mt-4", "flex", "gap-3", "items-center");

  const reactionsTitle = document.createElement("p");
  reactionsTitle.classList.add("font-semibold", "text-gray-400");
  reactionsTitle.innerText = "Reactions:";
  reactionsContainer.appendChild(reactionsTitle);

  post.reactions.forEach((reaction) => {
    const reactionItem = document.createElement("span");
    reactionItem.classList.add("text-sm", "flex", "items-center", "gap-1");

    const reactionSymbol = document.createElement("span");
    reactionSymbol.innerText = reaction.symbol;

    const reactionCount = document.createElement("span");
    reactionCount.innerText = `(${reaction.count})`;

    reactionItem.append(reactionSymbol, reactionCount);
    reactionsContainer.appendChild(reactionItem);
  });

  if (accessToken) {
    const editButton = document.getElementById("edit-btn");
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
