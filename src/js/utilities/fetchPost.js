import { API_SOCIAL_POSTS } from "../api/constants.js";
import { headers } from "../api/headers.js";
import { doFetch } from "./doFetch.js";
import { getId } from "./getId.js";

export async function getPost() {
  try {
    const id = getId();
    const response = await doFetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "GET",
    });
    const post = response.data;
    return post;
  } catch (error) {
    console.error("Fetching error:", error.message);