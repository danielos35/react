import PropTypes from "prop-types";

export const Props = ({ title, numeros }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{numeros}</h1>
    </>
  );
};

// DEFINIR PROPTYPES:
Props.propTypes = {
  title: PropTypes.string.isRequired,
};
