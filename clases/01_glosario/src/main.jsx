import React from "react";
import ReactDOM from "react-dom/client";
// import { Index_app_gif } from "./01_app_intro/index_app_gif";
import { Index_hook } from "./02_hooks/index_hook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Index_hook />
    {/* <Index_app_gif /> */}
  </React.StrictMode>
);
