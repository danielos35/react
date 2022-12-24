import { getGifs } from "../helpers/get_images";
export const GifGrid = ({ categoria }) => {
  getGifs(categoria);
  return (
    <>
      <h3>{categoria}</h3>
    </>
  );
};
