import { API_AUTH_REGISTER } from "../constants.js";
import { accountError } from "./error.js";

export async function register({ name, email, password, bio, banner, avatar }) {
  try {
    const response = await fetch(`${API_AUTH_REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, bio, banner, avatar }),
    });

    console.log(JSON.stringify({ name, email, password, bio, banner, avatar }));
    console.log(response);
    const data = await response.json();

    if (!response.ok) {
      accountError(data);
      throw new Error(data.message || "Registration failed");
    }

    return response.ok;
  } catch (error) {
    throw new Error(error.message);
  }
}
