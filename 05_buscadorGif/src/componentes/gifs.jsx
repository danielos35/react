import { useEffect, useState } from "react"
import { getGifs } from "../funciones/getGifs"
import { GifItem } from "./gifItem";

export const Gifs = ({categoria}) => {
    const [imagenes,setImagen] = useState([]); 

    const asignarTitulos = async()=>{
      const objetoGif = await getGifs(categoria);
      setImagen(objetoGif);
    }

    useEffect(()=>{
      asignarTitulos()
    },[])

  return (
    <>
        <h3> {categoria}</h3>
      <div className="card-grid">
        {imagenes.map((imagenes) => 
          (<GifItem 
            key={imagenes.id} 
            {...imagenes}
            />)
        )}

      </div>
    </>
  )
}
