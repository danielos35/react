import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter, useFetch } from "./../02_useEffect/hooks";
import { Loading } from "./../02_useEffect/Loading";
import { Perros } from "./../02_useEffect/Perros";

export const Layout = () => {
    const { counter:numero_perros, increment, decrement, reset } = useCounter(1);
    const url = `https://dog.ceo/api/breed/hound/images/random/${ numero_perros }`;
    const { data , hasError, isLoading } = useFetch(url);


    const [boxSize, setBoxSize] = useState({width: 0, height:0});

    // HACER REFERENCIA A UN ELEMENTO
    const pRef = useRef();

    /**
     * useLayoutEffect
     * - Se ejecuta al terminar de renderizarse el componente
     * */ 

    useLayoutEffect(()=>{

        /**
         * getBoundingClientRect() nos permite optener todos los datos del contenedor
         * */ 
        const dataContainer  = pRef.current.getBoundingClientRect();
        console.log(dataContainer);
        setBoxSize(dataContainer);
    },[numero_perros])
  
    return (
      <>
        <h1>Dogs</h1><hr />      
        <h3>Numero de perros: {numero_perros}</h3><hr /> 
        <button className="btn btn-primary m-2" onClick={()=>{increment()}}>Mas perros</button>      
        <button className="btn btn-primary m-2" onClick={()=>{decrement()}}>Menos perros</button>      
        <button className="btn btn-primary m-2" onClick={()=>{reset()}}>Reset</button>
        <br/>   
        { 
          isLoading 
            ? <Loading/>
            : <p>Todo se cargó correctamente</p>
        }
        <div ref={pRef}>
            { !isLoading && data.message && data.message.length > 0 && numero_perros > 0
                ? ( data.message.map((res) => <Perros ref={pRef} key={res} url={res}/>))   
                : (<h1>No Hay datos para mostrar</h1>)
            }
        </div>
        <code>
            {JSON.stringify(boxSize)}
        </code>
      </>
    );
}
