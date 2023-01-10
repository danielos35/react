import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { HomePage, LoginPage, AboutPage, Navbar } from './';
import { UserProvider } from './context/UserProvider';
 
export const MainApp = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  )
}
