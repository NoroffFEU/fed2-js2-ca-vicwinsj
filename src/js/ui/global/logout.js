import { onLogout } from "../auth/logout.js";

export function setLogoutListener() {
  console.log("listener imported");
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", (event) => onLogout(event));
}

setLogoutListener();
