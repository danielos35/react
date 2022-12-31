//Custom hooks
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  // Custom hook
  const { img, isLoading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {isLoading && <h1>Cargando...</h1>}
      <div className="card-grid">
        {img.map((image) => (
          <>
            <GifGridItem
              key={image.id}
              //Enviar todas propiedades de un objeto
              {...image}
            ></GifGridItem>
          </>
        ))}
      </div>
    </>
  );
};
