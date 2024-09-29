import { API_AUTH_LOGIN } from "../constants.js";
import { getKey } from "./key.js";

export async function login({ email, password }) {
  try {
    const response = await fetch(`${API_AUTH_LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      await getKey(data);
    } else {
      await accountError(data);
    }

    return response.ok;
  } catch (error) {
    const errorMessage = document.getElementById("login-error");
    errorMessage.innerText = `${error.message}`;
  }
}
