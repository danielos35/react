import { useState } from "react"

export const Use_state_component = () => {
    
    // 
    const [estado,setCounter] = useState({
        contadorPrincipal:0,
        contadorSecundario:0,
        tercerContador:0,
    })
    


    return (
        <>
            <h1>{estado.contadorPrincipal}</h1>
            <h1>{estado.contadorSecundario}</h1>
            <h1>{estado.tercerContador}</h1>
            <hr/>
            <button onClick={()=>{
                setCounter(({contadorPrincipal,contadorSecundario,tercerContador})=>{
                    return {
                        ...estado,
                        contadorSecundario:contadorSecundario+1,
                    }
                })
            }} >+1</button>
        </>
  )
}
