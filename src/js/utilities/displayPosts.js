import { generatePosts } from "./generatePosts.js";
import { getPosts } from "./fetchPosts.js";

// export const posts = getPosts();

// async function loadAndDisplayPosts() {
//   try {
//     // Fetch posts using the already defined getPosts function
//     const posts = await getPosts();

//     // Check if posts are valid
//     if (!posts || !Array.isArray(posts)) {
//       throw new Error("Invalid posts data");
//     }

//     // Display posts
//     displayPosts(posts);
//   } catch (error) {
//     console.error("Error fetching or displaying posts:", error.message);
//   }
// }

export async function displayPosts(posts) {
  const socialPosts = document.getElementById("social-posts");
  socialPosts.textContent = "";

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentPosts = posts.slice(0, 12);

  recentPosts.forEach((post) => {
    const generatedPosts = generatePosts(post);
    socialPosts.appendChild(generatedPosts);
  });
}
