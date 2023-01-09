import {BrowserRouter} from 'react-router-dom';

export const Index_use_context = () => {
  return (
    <>
      {/* BrowserRouter es un componente que recibe otros componentes dentro de él */}
      <BrowserRouter>
        <h1>APLICACIÓN PRINCIPAL</h1>
      </BrowserRouter>
    </>
  )
}
