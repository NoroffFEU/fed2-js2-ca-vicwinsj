// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
export default async function router(pathname = window.location.pathname) {
  let cleanPath = pathname.replace(/\/index\.html$/, "/");

  let view;

  switch (cleanPath) {
    case "/":
      view = await import("./views/home.js");
      break;
    case "/auth/":
      view = await import("./views/auth.js");
      break;
    case "/auth/login/":
      view = await import("./views/login.js");
      break;
    case "/auth/register/":
      view = await import("./views/register.js");
      break;
    case "/post/":
      view = await import("./views/post.js");
      break;
    case "/post/edit/":
      view = await import("./views/postEdit.js");
      break;
    case "/post/create/":
      view = await import("./views/postCreate.js");
      break;
    case "/profile/":
      view = await import("./views/profile.js");
      break;
    default:
      view = await import("./views/notFound.js");
  }

  if (view && typeof view.default === "function") {
    view.default();
  }
}
