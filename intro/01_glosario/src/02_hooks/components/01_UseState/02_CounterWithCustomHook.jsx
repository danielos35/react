import { useCounter } from "./hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <div>Counter with hook: {counter}</div>
      <button onClick={() => increment(2)}>+1</button>
      <button onClick={() => decrement(3)}>-1</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};
