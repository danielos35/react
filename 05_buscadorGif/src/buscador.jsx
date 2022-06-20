import { useState } from "react";

export const Buscador = () => {
  const [busquedas, setBusquedas] = useState(["Musica", "Politica"]);
  console.log(busquedas);
  return (
    <>
      <h1>Buscador Gif</h1>

      <ol>
        {busquedas.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
};
