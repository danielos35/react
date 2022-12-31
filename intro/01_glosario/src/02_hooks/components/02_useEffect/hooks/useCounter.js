import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((v) => v + value);
  };

  const decrement = (value = 1) => {
    setCounter((v) => v - value);
  };

  const reset = () => {
    setCounter((v) => (v = 0));
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
