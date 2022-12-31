import { useState } from "react";

export const UseStateComponent = () => {
  const [number, setNumber] = useState({
    counter_uno: 10,
    counter_dos: 20,
    counter_tres: 30,
  });

  return (
    <>
      <h1>Counter uno:{number.counter_uno}</h1>
      <h1>Counter dos:{number.counter_dos}</h1>
      <h1>Counter tres:{number.counter_tres}</h1>
      <hr />
      <button
        onClick={() =>
          setNumber((v) => {
            const { counter_uno, counter_dos, counter_tres } = v;
            return { ...v, counter_uno: counter_uno + 1 };
          })
        }
      >
        +1
      </button>
      <button onClick={() => setNumber((v) => v - 1)}>-1</button>
      <button onClick={() => setNumber((v) => (v = 0))}>reset</button>
    </>
  );
};

/*

LEGACY

export const UseStateComponent = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Counter:{number}</h1>
      <hr />
      <button onClick={() => setNumber((v) => v + 1)}>+1</button>
      <button onClick={() => setNumber((v) => v - 1)}>-1</button>
      <button onClick={() => setNumber((v) => (v = 0))}>reset</button>
    </>
  );
};


*/
