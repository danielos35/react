import { useState } from "react";

export const Buscador = () => {
  const [busquedas, setBusquedas] = useState(["Musica", "Politica"]);
  const agregarCategorias = () => {

    // Forma 1
    // setBusquedas([...busquedas, "Hola Mundo"]);

    // Forma2
    setBusquedas(busquedas=>[...busquedas, 'Hola Mundo'])
  };
  return (
    <>
      <h1>Buscador Gif</h1>
      <button onClick={agregarCategorias}>Agregar categoria</button>
      <ol>
        {busquedas.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
};
