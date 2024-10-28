import { authGuard } from "../../utilities/authGuard.js";
import { getPost } from "../../utilities/fetchPost.js";
import { generateEditPostContent } from "../../utilities/generateEditPostContent.js";

authGuard();

alert("Single Post Page");

async function renderPost() {
  const post = await getPost();
  generateEditPostContent(post);
  // toggleEditButton(editButton);
}

renderPost();
