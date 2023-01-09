import {BrowserRouter} from 'react-router-dom';
import { MainApp } from './pages';

export const Index_use_context = () => {
  return (
    <>
      {/* BrowserRouter es un componente que recibe otros componentes dentro de él */}
      <BrowserRouter>
        <MainApp/>
      </BrowserRouter>
    </>
  )
}
