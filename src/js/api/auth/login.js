import { API_AUTH_LOGIN } from "../constants.js";
import { getKey } from "./key.js";
import { accountError } from "./error.js";
import { doFetch } from "../../utilities/doFetch.js";

// export async function login({ email, password }) {
//   try {
//     const response = await fetch(`${API_AUTH_LOGIN}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       getKey(data);
//     } else {
//       accountError(data);
//     }

//     return response.ok;
//   } catch (error) {
//     const errorMessage = document.getElementById("login-error");
//     errorMessage.innerText = `${error.message}`;
//   }
// }

export async function login({ email, password }) {
  try {
    const data = await doFetch(`${API_AUTH_LOGIN}`, {
      method: "POST",
      body: { email: email, password: password },
    });

    if (data) {
      getKey(data);
      return true;
    } else {
      accountError(data);
      return false;
    }
  } catch (error) {
    const errorMessage = document.getElementById("login-error");
    errorMessage.innerText = `${error.message}`;
    return false;
  }
}
