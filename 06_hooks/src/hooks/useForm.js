import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    
    const [estadoFormulario, setEstadoFormulario] = useState(initialForm)
    const oninputChange =  ({target}) => {
        const {name, value} = target; 
        setEstadoFormulario({
            ...estadoFormulario, 
            [name]:value
        })
    }

  
    return {
        estadoFormulario,
        oninputChange
    }
}
