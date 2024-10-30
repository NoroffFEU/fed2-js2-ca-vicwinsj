import { API_SOCIAL_POSTS } from "../api/constants.js";
import { doFetch } from "./doFetch.js";
import { displayPosts } from "./displayPosts.js";
import { headers } from "../api/headers.js";

export async function getPosts() {
  try {
    const response = await doFetch(`${API_SOCIAL_POSTS}`, {
      method: "GET",
    });
    const posts = response.data;
    return posts;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}

export const posts = await getPosts();
