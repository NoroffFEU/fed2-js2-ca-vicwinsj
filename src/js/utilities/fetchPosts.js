import { API_SOCIAL_POSTS } from "../api/constants.js";
import { doFetch } from "./doFetch.js";
import { headers } from "../api/headers.js";

export async function getPosts({
  sort = "created",
  sortOrder = "desc",
  limit = 12,
  page = 1,
  _tag,
  _author = true,
  _reactions = true,
  _comments = true,
} = {}) {
  const url = new URL(`${API_SOCIAL_POSTS}`);

  url.searchParams.append("sort", sort);
  url.searchParams.append("sortOrder", sortOrder);
  url.searchParams.append("limit", limit);
  url.searchParams.append("page", page);
  if (_tag) url.searchParams.append("_tag", _tag);
  if (_author) url.searchParams.append("_author", "true");
  if (_reactions) url.searchParams.append("_reactions", "true");
  if (_comments) url.searchParams.append("_comments", "true");

  try {
    const response = await fetch(url, {
      headers: headers(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Fetching error:", error.message);
    throw error;
  }
}

export const posts = await getPosts();
