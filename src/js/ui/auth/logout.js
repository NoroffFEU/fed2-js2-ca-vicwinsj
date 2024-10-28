export function onLogout(event) {
  event.preventDefault();
  const gotToken = localStorage.accessToken;
  if (gotToken) {
    localStorage.removeItem("accessToken");
    location.reload();
    console.log("Log out success");
  } else {
    console.log("No token");
  }
}
