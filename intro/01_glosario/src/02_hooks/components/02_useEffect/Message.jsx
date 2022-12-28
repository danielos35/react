import { useEffect } from "react";

export const Message = () => {
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
