import { authGuard } from "../../utilities/authGuard.js";
import { getPosts } from "../../utilities/fetchPosts.js";
import { displayPosts } from "../../utilities/displayPosts.js";

authGuard();

export default async function renderHome() {
  const socialPosts = document.getElementById("social-posts");
  socialPosts.innerHTML = "<h1>Loading posts...</h1>";

  try {
    const posts = await getPosts();
    if (posts && posts.length > 0) {
      displayPosts(posts);
    } else {
      socialPosts.innerHTML = "<p>No posts available.</p>";
      console.error("No posts available or an error occurred.");
    }
  } catch (error) {
    console.error("Error rendering posts:", error);
    socialPosts.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
  }
}

renderHome();

// export async function renderPosts() {
//   const posts = await getPosts();
//   if (posts && posts.length > 0) {
//     displayPosts(posts);
//   } else {
//     console.error("No posts available or an error occurred.");
//   }
// }

// renderPosts();
