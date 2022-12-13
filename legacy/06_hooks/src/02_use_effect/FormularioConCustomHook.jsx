import { useForm } from "../hooks/useForm"
export const FormularioConCustomHook = () => {

    const { estadoFormulario:{ username, email, password}, oninputChange, limpiarFormulario} = useForm({
        username : '',
        email : '',
        password : '',
    })



    return (
        <>
            <h1>
                Formulario con Custom Hook
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

            <input
                type = "Password"
                className = "form-control mt-3"
                placeholder = "Contraseña"
                name = "password"
                value={password}
                onChange = {oninputChange}        
            />

            <button className="btn btn-primary mt-2" onClick={limpiarFormulario} > Limpiar </button>
        </>


        
    )
}
