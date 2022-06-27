import { useEffect, useState } from "react"
import { getGifs } from "../funciones/getGifs"

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
      <ol>
        {imagenes.map(({id,title}) => 
          (<li key={id}>{title}</li>)
        )}

        
      </ol>
    </>
  )
}
