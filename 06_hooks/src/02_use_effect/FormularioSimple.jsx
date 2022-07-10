import { useEffect, useState } from "react"
import { Message } from "./message";

export const FormularioSimple = () => {

    const [estadoFormulario, setEstadoFormulario] = useState({
        username : 'Daniel',
        email : 'daniel@d.com' 
    })

    const {username, email} = estadoFormulario;
    const oninputChange =  ({target}) => {
        // Valor que cambió
        // console.log(target.name);

        // Nuevo valor
        // console.log(target.value);

        const {name, value} = target; 
        setEstadoFormulario({
            ...estadoFormulario, 
            [name]:value
        })
    }

    useEffect(()=>{
        // console.log('el use Efect se llamo inicialmente');
    },[])

    useEffect(()=>{
        // console.log('el use Efect se llamo, porque se cambio el formulario');
    },[estadoFormulario])

    useEffect(()=>{
        // console.log('el use Efect se llamo, porque se cambio el formulario y el email');
    },[email])


    return (
        <>
            <h1>
                Formulario Simple
            </h1>
        
            <input
                type = "text"
                className = "form-control"
                placeholder = "Username"
                name = "username"
                value={username}
                onChange = {oninputChange}                        
            />

            <input
                type = "email"
                className = "form-control mt-3"
                placeholder = "daniel@gmail.com"
                name = "email"
                value={email}
                onChange = {oninputChange}        
            />
            
            {
                (username === 'Felipe') && <Message/>
            }
        </>
    )
}
