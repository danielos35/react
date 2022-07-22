import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
    const seleccionar = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screem</h1>
            <hr />

            <input
                ref={inputRef}
                type='text'
                placeholder="ingrese Nombre"
                className="form-control"
            />


            <button className="btn btn-primary mt-3" onClick={seleccionar}>
                Set Focus
            </button>
        </>
    )
}
