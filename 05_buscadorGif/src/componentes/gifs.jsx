
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./gifItem";

export const Gifs = ({categoria}) => {

    const { imagenes, isLoading} = useFetchGifs(categoria);
   

  return (
    <>
        <h3> {categoria}</h3>
        {
          // Si isLoading es true ejecuta el resto de la expresión.
          isLoading && (<h2>Cargando</h2>)
        }
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
