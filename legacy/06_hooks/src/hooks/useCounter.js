
import {useState} from 'react'; 

export const useCounter = (valorInicial = 99) => {

    const [counter,setCounter] = useState(valorInicial)

    let incrementar = (aIncrementar = 1) =>{
        setCounter(val=>val+aIncrementar);
    }

    let restar = (aRestar) => {
        setCounter(val => val-aRestar);
    }

    let reset = () => {
        setCounter(val => val = 0)
    }
    return {
        counter,
        incrementar,
        restar,
        reset
    }
}