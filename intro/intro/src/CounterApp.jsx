import PropTypes from "prop-types";

const add_number = (e) => {
  console.log(e);
};

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>Counter APP</h1>
      <h2>{value}</h2>

      {/* FUNCIONES */}
      {/* El event va por defecto en el argumento */}

      <button onClick={add_number}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
