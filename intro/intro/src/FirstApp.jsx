/**
 * Funcionalidades preferiblemente fuera del funcionalcomponent
 *
 *
 * */

const datos = {
  nombre: "Daniel",
  apellido: "Felipe",
};

const unNombre = function () {
  return "Hola este es mi nombre";
};

export const App = function ({ title = "valor por defecto", numero }) {
  return (
    <>
      {/* PROPS */}
      <p>{title}</p>
      <p>{numero}</p>

      {/* EXPRESIONES */}

      <h1>Hola Mundo</h1>
      <h1>{2 + 2}</h1>
      <hr></hr>
      <h1>{2 + 2}</h1>
      <h1>{datos.nombre}</h1>
      <h1>{datos.apellido}</h1>
      <h1>{unNombre()}</h1>
    </>
  );
};
