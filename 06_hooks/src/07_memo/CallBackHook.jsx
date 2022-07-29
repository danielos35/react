import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementar = useCallback(() => {
    setCounter((val) => val + 1);
  }, []);

  return (
    <>
      <h1> UseCallBack </h1>
      <hr />
      <p>{counter}</p>
      <ShowIncrement increment={incrementar} />
    </>
  );
};
