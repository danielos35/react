import { useState } from "react";
import { useCounter } from "../02_useEffect/hooks"
import { Small } from "./Small";

export const Memorize = () => {
    
    const {counter, increment} =useCounter();
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Small counter={counter}/>
        <hr/>
        
        <button 
            className="btn btn-danger"
            onClick={()=>{increment()}}
        >
            +1
        </button>

        <button 
            className="btn btn-primary m-2"
            onClick={()=>{setShow(!show)}}
        >
            Show/hide: {JSON.stringify(show)}
        </button>
      </>
  )
}
