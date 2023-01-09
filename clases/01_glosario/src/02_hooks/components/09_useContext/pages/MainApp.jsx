import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { HomePage, LoginPage, AboutPage, Navbar } from './';
 
export const MainApp = () => {
  return (
        <>

          <Navbar />
            <hr/>

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
