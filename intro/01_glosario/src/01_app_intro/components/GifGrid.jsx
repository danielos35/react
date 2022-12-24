// El use effect se dipara cada vez que tengamos un cambio en especifico
import { useEffect } from "react";
import { getGifs } from "../helpers/get_images";
export const GifGrid = ({ categoria }) => {
  /**
   * ARGUMENTO 1
   * - Lo que vayamos a ejecutar
   *
   * ARGUMENTO 2
   * 	- Lo que tiene que cambiar para que se ejecute el primer argumento
   *	- Si el arreglo de dependecias se deja vacio, el callback solo ejectará la primera vez que se renderice el componente
   * */

  useEffect(() => {
    getGifs(categoria);
  }, []);
  return (
    <>
      <h3>{categoria}</h3>
    </>
  );
};
