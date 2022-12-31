import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

  const [counter, setCounter] = useState(1);
    /**
     * USE CALLBACK 
     * -  Lo puede usar con la intención de memorizar funciones
     * -  Las funciones pueden recibir argumentos
     * */ 
 
    const incrementFather = useCallback((value = 1)=>{
        setCounter((v)=> v+value);
     },[])


    /**
     * También puede ser usada cuando necesitamos usar una función dentro de un useEffect como valor a estar escuchando, pues si mandamos una función si pasarla por un callback siempre sería un función diferente
     * */  

    useEffect(()=>{
      console.log('Hola mundo');
    }, [incrementFather])

    return (
        <>
          <div>UseCallBack hook {counter}</div>
          <hr/>
          <ShowIncrement increment={ incrementFather }/>
        </>
    )
  }
