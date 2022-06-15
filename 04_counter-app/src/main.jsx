// Elementos para renderizar una aplicación.

import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWordApp } from "./helloWord";

// Renderizar información
ReactDOM.createRoot(document.getElementById("root")).render(
  //   Trabajar en modo estricto.
  <React.StrictMode>
    <HelloWordApp />
  </React.StrictMode>
);
