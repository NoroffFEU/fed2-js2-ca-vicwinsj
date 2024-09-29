export async function accountError(response) {
  const errorData = await response.json();
  let errorMessage = "Unknown error occurred";

  if (errorData.errors && Array.isArray(errorData.errors)) {
    errorMessage = errorData.errors.map((err) => err.message + ".").join("\n");
  } else if (errorData.error && errorData.error.message) {
    errorMessage = errorData.error.message + ".";
  }
  throw new Error(errorMessage);
}
