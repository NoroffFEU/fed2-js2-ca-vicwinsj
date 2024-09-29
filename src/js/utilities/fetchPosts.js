import { API_SOCIAL_POSTS } from "../api/constants.js";
import { headers } from "../api/headers.js";

export async function getPosts() {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}`, {
      method: "GET",
      headers: headers(),
    });
    const fetchedPosts = await response.json();
    const posts = fetchedPosts.data;
    return posts;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}
