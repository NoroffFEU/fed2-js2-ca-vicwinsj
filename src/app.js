import "./css/style.css";
import router from "./js/router/index.js";
import "./js/ui/global/logout.js";
import { toggleMenuLinks } from "./js/ui/global/toggleMenuLinks";
import { generateMenu } from "./js/utilities/menu.js";

await router(window.location.pathname);

toggleMenuLinks();
// generateMenu();
