export function toggleAccountLinks() {
  const profile = document.getElementById("profile");
  const login = document.getElementById("login");
  const register = document.getElementById("register");
  const logout = document.getElementById("logout-button");
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    profile.classList.remove("hide");
    login.classList.add("hide");
    register.classList.add("hide");
    logout.classList.remove("hide");
  }
}
