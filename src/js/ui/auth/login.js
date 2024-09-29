// import { loginRedirect } from "./loginRedirect.mjs";
import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
  event.preventDefault();
  const loginData = {
    email: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value,
  };

  const errorMessage = document.getElementById("login-error");

  try {
    const isLoggedIn = await login(loginData);

    if (isLoggedIn) {
      console.log("Login successful");
      // window.history.go(-1); //
    } else {
      console.log("not successful");
    }
  } catch (error) {
    errorMessage.innerText = `${error.message}`;
  }
}
