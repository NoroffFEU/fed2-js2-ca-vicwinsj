import "./css/style.css";
import router from "./js/router/index.js";
import "./js/ui/global/logout.js";

await router(window.location.pathname);
