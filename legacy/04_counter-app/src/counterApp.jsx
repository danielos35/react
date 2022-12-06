import { useState } from "react";
export const CounterApp = ({ value }) => {
  // HOOKS
  const [counter, setCounter] = useState(0);

  const sumar = function () {
    // Forma #1
    setCounter(counter + 1);

    // Forma #2
    // setCounter((contador) => contador - 1);
  };

  const restar = function () {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter APP</h1>
      <h1> {counter} </h1>

      <button onClick={sumar}>+1</button>
      <button onClick={restar}>-1</button>
    </>
  );
};
