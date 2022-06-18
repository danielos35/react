export const CounterApp = ({ value }) => {
  
  const imprimir = function () {
    console.log("Hola Mundo");
  };

  return (
    <>
      <h1>Counter APP</h1>
      <h1> {value} </h1>

      <button onClick={imprimir}>+1</button>
    </>
  );
};
