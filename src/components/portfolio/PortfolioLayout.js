import { Link, Outlet } from "react-router-dom"
import './PortfolioLayout.css'


function PortfolioLayout () {
    return (
        <>
            <div className="link-ctn">
            <Link to={'/portfolio/rastline'}>
                <div>icon</div>
                Rastline
            </Link>

            <Link to={'/portfolio/zivali'}>
                <div>icon</div>
                Živali 
            </Link>

            <Link to={'/portfolio/portreti_zivali'}>
                <div>icon</div>
                Portreti zivali 
            </Link>

            <Link to={'/portfolio/portreti_ljudi'}>
                <div>icon</div>
                Portreti ljudi 
            </Link>

            <Link to={'/portfolio/linorez'}>
                <div>icon</div>
                Linorez 
            </Link>

            <Link to={'/portfolio/ostalo'}>
                <div>icon</div>
                Ostalo 
            </Link>

            </div>
            <Outlet />
            
        </>
    )
}

export default PortfolioLayout