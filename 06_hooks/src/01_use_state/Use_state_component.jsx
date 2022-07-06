import { useState } from "react"

export const Use_state_component = () => {
    
    const [counter,setCounter] = useState(10); 
    


    return (
        <>
            <h1>{counter}</h1>
            <hr/>
            <button onClick={()=>{
                setCounter(val=>val+1)
            }} >+1</button>
        </>
  )
}
