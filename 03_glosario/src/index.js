// Se importa para hacer uso de JSX
import React from "react";

// Se importa para renderizar los elementos en nuestra pagina principal
import ReactDOM from "react-dom/client";

// Elemento a renderizar
const saludo = <h1>Hola Mundo</h1>;

// Elemento donde renderizaré mi aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
Renderizar elemento:
Argumento 1: Elemento a renderizar.
Argumento 2: Elemento donde voy a renderizar.
*/
root.render(saludo);
