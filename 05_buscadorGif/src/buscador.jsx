import { useState } from "react";
import { AddCategoria} from "./componentes/agregarCategoria";

export const Buscador = () => {
  const [busquedas, setBusquedas] = useState(["Musica", "Politica"]);
  const agregarCategorias = ( nuevaCategoria) => {
    console.log(nuevaCategoria);

    // Forma 1
    setBusquedas([...busquedas, nuevaCategoria]);

    // Forma2
    // setBusquedas(busquedas=>[...busquedas, 'Hola Mundo'])
  };
  return (
    <>
      <h1>Buscador Gif</h1>

      <AddCategoria 
        onNewCategory = {event =>agregarCategorias(event)}
        //  setBusquedas={setBusquedas} busquedas={busquedas}
      />
      
      <button onClick={agregarCategorias}>Agregar categoria</button>
      <ol>
        {busquedas.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
};
