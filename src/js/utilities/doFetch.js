import { headers } from "../api/headers.js";

export async function doFetch(url, { method = "GET", body, ...options } = {}) {
  const requestOptions = {
    method,
    headers: headers(method),
    body: method !== "GET" && body ? JSON.stringify(body) : undefined,
    ...options,
  };

  try {
    const response = await fetch(url, requestOptions);

    if (
      response.status === 204 ||
      response.headers.get("Content-Length") === "0"
    ) {
      return null;
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error.message);
    throw error;
  }
}

// export async function doFetch(url, { body, method = "GET", ...options } = {}) {
//   const requestOptions = {
//     method,
//     headers: headers(),
//     body: body ? JSON.stringify(body) : undefined,
//     ...options,
//   };

//   try {
//     const response = await fetch(url, requestOptions);

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! Status: ${response.status}. ${errorText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Fetching error:", error.message);
//     throw error;
//   }
// }

// export async function doFetch(
//   url,
//   { headers: customHeaders, body, ...options } = {}
// ) {
//   const requestOptions = {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       ...(options.headers ? Object.fromEntries(options.headers.entries()) : {}),
//       ...(headers() ? Object.fromEntries(headers().entries()) : {}),
//     },
//     body: body ? JSON.stringify(body) : undefined,
//   };

//   try {
//     const response = await fetch(url, requestOptions);
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! Status: ${response.status}. ${errorText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Fetching error:", error.message);
//     throw error;
//   }
// }
