import React from "react";
import { useCounter, useFetch } from "./hooks";
import { Loading } from "./Loading";

export const MultipleCustomHooks = () => {
  const { counter:numero_perros, increment, decrement, reset } = useCounter(1);
  const url = `https://dog.ceo/api/breed/hound/images/random/${ numero_perros }`;
  const { data , hasError, isLoading } = useFetch(url);

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
      { !isLoading && data.message && data.message.length > 0 && numero_perros > 0
          ? ( data.message.map((res) => <img key={res} src={res}/>))   
          : (<h1>No Hay datos para mostrar</h1>)
      }
    </>
  );
};
