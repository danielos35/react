import { useEffect, useState } from "react";
import { getGifs } from "../funciones/getGifs"
export const useFetchGifs = (categoria) => {
    const [imagenes,setImagen] = useState([]); 
    const [isLoading, setIsLoading] = useState(true)

    const asignarTitulos = async()=>{
      const objetoGif = await getGifs(categoria);
      setImagen(objetoGif);
    }

    useEffect(()=>{
      asignarTitulos(); 
      setIsLoading(false)
    },[])
  return {
      imagenes,
      isLoading
  }
}
