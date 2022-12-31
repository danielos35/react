import { useMemo, useState } from "react";
import { useCounter } from "../02_useEffect/hooks"


/**
 * 
 * INTENTAR REALIZAR LA LOGICA DEL COMPONENTE SIEMPRE POR FUERA DE LA FUNCIÓN
 *
 * */ 
const heavyStuff = ( iterationNumber = 100) => {
    for(let i = 0; i<iterationNumber; i++){
        console.log('ahí vamos');
    }

    return `${iterationNumber} iteraciones`
}

export const MemorizeHook = () => {
    
    const {counter, increment} =useCounter(4000);
    const [show, setShow] = useState(true);

    /**
     * 
     * USE MEMO
     * - El use memo se encarga de memorizar un valor
     * -- ARGUMENTO #1: callback con valor a memorizar
     * -- ARGUMENTO #2: valor que al cambiar genera una nueva memoria 
     * Redibuja el valor si las dependencias cambian
     * */ 
    const valorMemorizado = useMemo(()=> heavyStuff(counter), [counter])
    return (
      <>
        <h1>Counter <small>{counter}</small></h1>
        <hr/>
        
        <h4>{valorMemorizado}</h4>
        <button 
            className="btn btn-danger"
            onClick={()=>{increment()}}
        >
            +1
        </button>

        <button 
            className="btn btn-primary m-2"
            onClick={()=>{setShow(!show)}}
        >
            Show/hide: {JSON.stringify(show)}
        </button>
      </>
  )
}
