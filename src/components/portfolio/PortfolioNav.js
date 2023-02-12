import { Link, Outlet } from "react-router-dom"


function PortfolioNav () {
    return (
        <div>
            <Link to={'/portfolio/rastline'}> Rastline </Link>
            <Outlet />
        </div>
    )
}

export default PortfolioNav