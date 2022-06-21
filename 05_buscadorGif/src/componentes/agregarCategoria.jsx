import { useState } from "react"


export const AddCategoria = () => {
  
  const [inputValue, setInputValue] = useState('Hola Mundo')
  
  const enviar = (event)=>{
    event.preventDefault()
    console.log(inputValue);
  }
  
  const cambiarValor = (event)=>{
    setInputValue(event.target.value);
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
