export function toggleLoader() {
  const loaderOverlay = document.getElementById("loader-overlay");
  if (loaderOverlay) {
    loaderOverlay.classList.toggle("hidden"); // Toggles the "hidden" class
    loaderOverlay.classList.toggle("flex"); // Toggles the "flex" class
  }
}

// export function hideLoader() {
//   document.getElementById("loader-overlay").classList.toggle("hidden");
//   document.getElementById("loader-overlay").classList.toggle("flex");
// }
