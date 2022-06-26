import { useEffect } from "react"
import { getGifs } from "../funciones/getGifs"

export const Gifs = ({categoria}) => {

    useEffect(()=>{
      getGifs(categoria)
    },[])

  return (
    <>
        <h3> {categoria}</h3>
        <p> Hola Mundo </p>
    </>
  )
}
