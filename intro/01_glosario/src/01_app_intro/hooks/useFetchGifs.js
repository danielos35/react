// El use effect se dipara cada vez que tengamos un cambio en especifico
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/get_images";

export const useFetchGifs = (categoria) => {
  const [img, setImages] = useState([]);
  const getImages = async () => {
    const images = await getGifs(categoria);
    setImages((data) => (data = images));
  };

  /**
   * ARGUMENTO 1
   * - Lo que vayamos a ejecutar
   *
   * ARGUMENTO 2
   * 	- Lo que tiene que cambiar para que se ejecute el primer argumento
   *	- Si el arreglo de dependecias se deja vacio, el callback solo ejectará la primera vez que se renderice el componente

   NO SE DEBE USAR DE MANERA ASINCRONA
   * */

  useEffect(() => {
    getImages();
  }, []);
  return {
    img,
    isLoading: true,
  };
};
