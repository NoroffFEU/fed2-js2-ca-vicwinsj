export async function getKey(name) {
  const data = await name.json();
  if (data.data.accessToken) {
    localStorage.setItem("accessToken", data.data.accessToken);
  }
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
}

//   export const accessToken = localStorage.getItem("accessToken");
