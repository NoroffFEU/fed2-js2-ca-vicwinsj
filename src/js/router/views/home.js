import { authGuard } from "../../utilities/authGuard.js";
import { getPosts } from "../../utilities/fetchPosts.js";
import { displayPosts } from "../../utilities/displayPosts.js";

authGuard();

export async function renderPosts() {
  const posts = await getPosts();
  if (posts && posts.length > 0) {
    displayPosts(posts);
  } else {
    console.error("No posts available or an error occurred.");
  }
}

renderPosts();
