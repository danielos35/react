/*

OPTION ANTIGUA
import { Fragment } from "react";

export const FirstApp = () => {
  return (
    <Fragment>
      <h1>Hola Mundo</h1>
      <h1>Primera Aplicación</h1>
    </Fragment>
  );
};


*/

// NUEVA OPCIÓN
import PropTypes from "prop-types";
const elemento = 12;
export const FirstApp = ({title}) => {
  return (
    <>
      <h1>{title||elemento}</h1>
      <h1>Hola Mundo</h1>
      <h1>Primera Aplicación</h1>
    </>
  );
};

FirstApp.propTypes = {
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.string
}

FirstApp.defaultProps = {
  name: 'Daniel', 
  subTitle: 'No hay sub', 
  // title: 'Sin titulo'
}