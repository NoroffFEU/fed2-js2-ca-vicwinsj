import "./css/style.css";
import router from "./js/router/index.js";
import "./js/ui/global/logout.js";
import { toggleMenuLinks } from "./js/ui/global/toggleMenuLinks";
import { setLogoutListener } from "./js/ui/global/logout.js";

await router(window.location.pathname);

toggleMenuLinks();
setLogoutListener();
// generateMenu();
