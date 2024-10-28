import { API_KEY } from "./constants.js";
import { accessToken } from "./auth/key.js";

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("Authorization", `Bearer ${accessToken}`);
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
