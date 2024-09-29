import { onLogout } from "../auth/logout.js";

export function setLogoutListener() {
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", (event) => onLogout(event));
}

setLogoutListener();
