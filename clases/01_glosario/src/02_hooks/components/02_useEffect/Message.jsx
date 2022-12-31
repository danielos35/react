import { useEffect } from "react";

/**
 * SIEMPRE SE DEBE DE DESUCRIBIR O CERRAR VALORES QUE CAMBIEN EL ESTADO EN UN COMPONENTE FUTURO
 *
 *
 * */

export const Message = () => {
  useEffect(() => {
    const listenMouse = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", listenMouse);

    return () => {
      window.removeEventListener("mousemove", listenMouse);
    };
  });
  useEffect(() => {
    console.log("Mensaje montado");
    return () => {
      console.log("Mensaje desmontado");
    };
  }, []);
  return (
    <>
      <div>
        <p>Usuario ya existe</p>
      </div>
    </>
  );
};
