import { getPost } from "../../utilities/fetchPost.js";
import { generatePostContent } from "../../utilities/generatePost.js";

alert("Single Post Page");

async function renderPost() {
  const post = await getPost();
  generatePostContent(post);
  // toggleEditButton(editButton);
}

renderPost();
