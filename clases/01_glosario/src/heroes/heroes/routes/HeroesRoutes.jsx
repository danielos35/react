import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { DcPage, Hero, MarvelPage, Search } from "../pages"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/marvel" element={<MarvelPage />}></Route>
                <Route path="/dc" element={<DcPage />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/hero/:heroId" element={<Hero />}></Route>

                <Route path="/" element={<Navigate to="/marvel" />}></Route>
            </Routes>
        </>
    )
}
