import { API_AUTH_REGISTER } from "../constants.js";

export async function register({ name, email, password, bio, banner, avatar }) {
  try {
    const response = await fetch(`${API_AUTH_REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, bio, banner, avatar }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Registration failed");
    }

    return response.ok;
  } catch (error) {
    throw new Error(error.message);
  }
}
