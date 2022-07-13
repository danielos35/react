import { useEffect } from "react";

export const Message = () => {

        useEffect(() => {
            const movimientoMouse = ({x,y})=>{
                console.log(x,y);
            }

        window.addEventListener('mousemove',movimientoMouse)

        return () => {
            window.removeEventListener('mousemove',movimientoMouse)
            console.log('Componente desmontado');
        }
        }, [])
        
    
    return (
        <>
            <h3>
                El usuario ya existe test
            </h3>
        </>
    )
}
