import { useState } from "react";
import { AddCategoria} from "./componentes/agregarCategoria";
import { Gifs } from "./componentes/gifs";

export const Buscador = () => {
  const [busquedas, setBusquedas] = useState(["Musica"]);
  const agregarCategorias = ( nuevaCategoria) => {

    if(busquedas.includes(nuevaCategoria))return
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
        {busquedas.map((categoria) => (
          <Gifs 
          key={categoria}
          categoria={categoria}
          />
        ))}
    </>
  );
};
