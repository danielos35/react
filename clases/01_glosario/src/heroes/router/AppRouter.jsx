import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { DcPage, MarvelPage } from "../heroes/pages"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { Navbar } from "../ui/components"

export const AppRouter = () => {
    return (
        <>    
            <Routes>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="/*" element={<HeroesRoutes />}></Route>
            </Routes>
        </>
    )
}
