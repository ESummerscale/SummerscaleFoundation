import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const redirect = sessionStorage.getItem("spa_redirect");

if (redirect) {
  sessionStorage.removeItem("spa_redirect");

  // restore original route
  window.history.replaceState(null, "", redirect);
}
createRoot(document.getElementById("root")!).render(<App />);
