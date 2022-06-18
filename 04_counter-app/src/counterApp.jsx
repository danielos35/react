import { useState } from "react";
export const CounterApp = ({ value }) => {
  // HOOKS
  const [counter, setCounter] = useState(0);

  const imprimir = function () {
    // Forma #1
    // setCounter(counter + 1);

    // Forma #2
    setCounter((contador) => contador + 1);
  };

  return (
    <>
      <h1>Counter APP</h1>
      <h1> {counter} </h1>

      <button onClick={imprimir}>+1</button>
    </>
  );
};
