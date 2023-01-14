import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogOut = () => {

        // Podemos remplazar y asi no guardar la ruta actual en el historial del navegador
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary mr-5">
                        Test
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={() => { onLogOut() }}
                    >
                        Logout
                    </button>
                    {/* <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}