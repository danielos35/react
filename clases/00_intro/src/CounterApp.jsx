// TODOS LOS HOOKS EMPIEZAN POR LA PALABRA USE
import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  /**
   * ARGUMENTO #1:  estado actual
   * ARGUMENTO #2: Realiza la modificación del argumento #1 o estado actual
   *
   * NO SE DEBEN DE MODIFICAR LOS VALORES DE UN UN HOOK FUERA DE SU FUNCION
   *
   *
   * CADA QUE TENGAMOS UN CAMBIO EN EL ESTADO EL COMPONENTE SE VUELVE A RENDERISAR
   *
   * */
  const [counter, setCounter] = useState(value);

  const add_number = () => {
    // forma #1
    // setCounter(counter + 1);
    // forma #2
    setCounter((valor_actual) => valor_actual + 1);
  };

  const min_number = () => setCounter((valor_actual) => valor_actual - 1);
  const reset = () => setCounter((valor_actual) => (valor_actual = 0));

  return (
    <>
      <h1>Counter APP</h1>
      <h2>{counter}</h2>

      {/* FUNCIONES */}
      {/* El event va por defecto en el argumento */}

      <button onClick={add_number}>+1</button>
      <button onClick={min_number}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
