import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, LoginPage, AboutPage } from './';
 
export const MainApp = () => {
  return (
        <>
            <div>MainApp</div>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>

                {/* Pagina 404 */}
                {/* <Route path='/*' element={<HomePage/>}/> */}
                <Route path='/*' element={<Navigate to={"/about"}/>}/>
            </Routes>
        </>
  )
}
