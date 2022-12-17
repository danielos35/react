/**
 * Funcionalidades preferiblemente fuera del funcionalcomponent
 *
 *
 * */

import PropTypes from "prop-types";

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

/*TIPAR PROPIEDADES*/

App.propTypes = {
  title: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
};
