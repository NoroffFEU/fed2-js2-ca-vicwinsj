import { accountError } from "../../api/auth/error.js";
import { register } from "../../api/auth/register.js";

export async function onRegister(event) {
  event.preventDefault();
  const registerData = {
    name: document.getElementById("register-name").value,
    email: document.getElementById("register-email").value,
    password: document.getElementById("register-password").value,
    bio: registerData.bio || "",
    banner: registerData.banner || "",
    avatar: registerData.avatar || "",
  };

  const errorMessage = document.getElementById("register-error");

  try {
    const isRegistered = await register(registerData);

    if (isRegistered) {
      console.log("Registration successful");
      // window.history.go(-1); //
    } else {
      await accountError(response);
    }
  } catch (error) {
    errorMessage.innerText = `${error.message}`;
  }
}
