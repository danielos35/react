import { useState } from "react"


export const AddCategoria = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('Hola Mundo')
  
  const cambiarValor = (event)=>{
    setInputValue(event.target.value);
    
  }
  
  const enviar = (event)=>{
    event.preventDefault()
    if(inputValue.trim().length<=1)return

    onNewCategory(inputValue.trim())
    // setBusquedas(busquedas=>[...busquedas,inputValue])
    setInputValue('')
  }
  

  return (

    <form onSubmit={event=>enviar(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event)=> cambiarValor(event)}
      />
    </form>
  )
}
