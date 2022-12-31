import { memo } from 'react';


/**
 * 
 * EL memo guarda el estado del componente y solo lo vuelve a ejecutar cuando los valores o props cambian
 * En algunos proyectos se encuentra como React.memo
 * 
 * 
 * */ 
export const Small = memo(({counter}) => {
    console.log('Se ejecutó nuevamente :/');
  return (
    <h1>Counter <small>{counter}</small></h1>
  )
})
