
export const getGifs = async (categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BATA8D9T2GkMUePGXGwJQq1NGNFGdqJg&q=${categoria}&limit=5`; 
    const respuesta = await fetch(url); 
    const {data = []} = await respuesta.json()
    const gifs = data.map( img => ({
        id :img.id, 
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}
