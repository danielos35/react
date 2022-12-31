import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./FirstApp";
import { CounterApp } from "./CounterApp";
// Los estilos globales los usamos en main.js
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App title="HOLA ESTE ES EL TITULO" numero={12} /> */}
    <CounterApp value={12} />
  </React.StrictMode>
);
