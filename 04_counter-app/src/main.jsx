// Elementos para renderizar una aplicación.

import React from "react";
import ReactDOM from "react-dom/client";

// Componente inicial.
function App() {
  return <h1>Hola mundo</h1>;
}

// Renderizar información
ReactDOM.createRoot(document.getElementById("root")).render(
  //   Trabajar en modo estricto.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
