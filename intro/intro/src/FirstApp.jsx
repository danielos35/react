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

export const App = function () {
  return (
    <>
      <h1>Hola Mundo</h1>

      {/* EXPRESIONES */}

      <h1>{2 + 2}</h1>
      <hr></hr>
      <h1>{2 + 2}</h1>
      <h1>{() => {}}</h1>
      <h1>{datos.nombre}</h1>
      <h1>{datos.apellido}</h1>
      <h1>{unNombre()}</h1>
    </>
  );
};
