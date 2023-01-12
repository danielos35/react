import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { DcPage, MarvelPage } from "../heroes/pages"
import { Navbar } from "../ui/components"

export const AppRouter = () => {
    return (
        <>
            <Navbar />        
            <Routes>
                <Route path="/marvel" element={<MarvelPage />}></Route>
                <Route path="/dc" element={<DcPage />}></Route>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="/" element={<Navigate to="/marvel" />}></Route>
            </Routes>
        </>
    )
}
