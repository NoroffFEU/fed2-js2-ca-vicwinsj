import "./css/style.css";
import router from "./js/router/index.js";
import "./js/ui/global/logout.js";
import { toggleMenuLinks } from "./js/ui/global/toggleMenuLinks";
import { setLogoutListener } from "./js/ui/global/logout.js";

await router(window.location.pathname);

toggleMenuLinks();
setLogoutListener();

const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/7d99a0a315.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);
