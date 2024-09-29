import { API_SOCIAL_POSTS } from "../api/constants.js";
import { headers } from "../api/headers.js";

export async function getPost() {
  try {
    let url = new URLSearchParams(window.location.search);
    let id = url.get("id");
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "GET",
      headers: headers(),
    });
    const post = await response.json();
    return post.data;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}

export const post = await getPost();
