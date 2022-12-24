export const getGifs = async (categoria) => {
  const apiKey = `BATA8D9T2GkMUePGXGwJQq1NGNFGdqJg`;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  const gifs = data.map((data) => ({
    id: data.id,
    title: data.title,
    url: data.images.downsized_medium,
  }));
  console.log(gifs);
  return gifs;
};
