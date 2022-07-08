import { useCounter } from "../hooks/useCounter"

export const CustomHook = () => {

    const {counter, incrementar, restar, reset} = useCounter(); 
    return (
        <>
            <h1>Counter with: {counter}</h1>
            <button onClick={()=> incrementar(3)}>+1</button>
            <button onClick={reset}>reset</button>
            <button onClick={()=> restar(2)} >-1</button>
        </>
  )
}
