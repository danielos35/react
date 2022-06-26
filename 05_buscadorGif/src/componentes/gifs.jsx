
    const getGifs = async (categoria)=>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=BATA8D9T2GkMUePGXGwJQq1NGNFGdqJg&q=${categoria}&limit=20`; 
        const respuesta = await fetch(url); 
        const {data = []} = await respuesta.json()
        const gifs = data.map( img => ({
            id :img.id, 
            title: img.title,
            url: img.images.downsized_medium.url
        }))
        console.log(gifs);
}


export const Gifs = ({categoria}) => {


    getGifs(categoria)


  return (
    <>
        <h3> {categoria}</h3>
        <p> Hola Mundo </p>
    </>
  )
}
