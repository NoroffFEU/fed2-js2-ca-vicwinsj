import { postUrl } from "./postUrl.js";
import { updateDate, creationDate } from "./formatDate.js";

export function generatePosts(post) {
  const postContainer = document.createElement("div");
  postContainer.classList.add(
    "flex",
    "flex-col",
    "gap-3",
    "w-1/2",
    "bg-black",
    "hover:bg-gray-900",
    "text-white",
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
  avatar.classList.add("w-5", "h-5", "object-contain");

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

  if (post.comments) {
    const commentsContainer = document.createElement("div");
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
  }

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
  // commentForm.append(textarea, button);

  const reactionsContainer = document.createElement("div");
  reactionsContainer.classList.add("mt-4", "flex", "gap-3", "items-center");

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

  postContainer.append(
    byline,
    body,
    imgContainer,
    reactionsContainer
    // commentForm,
    // commentsContainer
  );
  return postContainer;
}
