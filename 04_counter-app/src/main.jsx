// Elementos para renderizar una aplicación.

import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./firstApp";
import { HelloWordApp } from "./helloWord";


//IMPORTAR CSS
import './styles.css'

// Renderizar información
ReactDOM.createRoot(document.getElementById("root")).render(
  //   Trabajar en modo estricto.
  <React.StrictMode>
    <HelloWordApp />
    <FirstApp />
  </React.StrictMode>
);
