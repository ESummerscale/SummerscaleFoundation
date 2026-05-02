import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// ✅ Restore SPA route BEFORE React mounts
const redirect = sessionStorage.getItem("spa_redirect");

if (redirect) {
  sessionStorage.removeItem("spa_redirect");
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);