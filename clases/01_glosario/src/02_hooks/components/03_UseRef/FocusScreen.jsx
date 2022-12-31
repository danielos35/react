import { useRef } from "react";

export const FocusScreen = () => {
    /**
     * useRef
     * Nos permite mantener referencia a un elemento y no volver a renderizar el elemento cuando la referencia cambia
     * Al parecer es similar al viewChild de angular
     * */ 

    const inputRef = useRef();

    const onClickBtn =  () => {
        inputRef.current.select();
    }
  return (
    <>
        <h1>Focus screen</h1><hr/>
        <input
            ref={inputRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control mb-2"
        />

        <button 
            className="btn btn-primary"
            onClick={onClickBtn}    
            >
                Focus
        </button>
    </>
  )
}
