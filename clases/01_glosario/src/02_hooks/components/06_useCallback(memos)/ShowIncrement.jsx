import { memo } from 'react';

export const ShowIncrement = memo(( { increment } ) => {
  console.log('se redibujó');
  return (
    <button
        className="btn btn-success"
        onClick={()=>{
          increment(5)
        }}
    >
        Incrementar
    </button>
  )
})
