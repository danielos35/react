
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./gifItem";

export const Gifs = ({categoria}) => {

    const { imagenes, isLoading} = useFetchGifs(categoria);
   

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
