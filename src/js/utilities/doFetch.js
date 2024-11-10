import { headers } from "../api/headers.js";

// export
// const url = new URL("https://api.example.com/posts"); // Replace with actual API URL
// url.searchParams.append("sort", "created");
// url.searchParams.append("sortOrder", "desc");
// url.searchParams.append("limit", 10);
// url.searchParams.append("page", 2);
// url.searchParams.append("_tag", "technology");
// url.searchParams.append("_author", "true");
// url.searchParams.append("_reactions", "true");
// url.searchParams.append("_comments", "true");

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));

export async function doFetch(url, { method = "GET", body, ...options } = {}) {
  const requestOptions = {
    method,
    headers: headers(method),
    ...options,
  };

  if (method !== "GET" && body) {
    requestOptions.body = JSON.stringify(body);
  }

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
