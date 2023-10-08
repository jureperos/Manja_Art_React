import { Link, Outlet } from "react-router-dom"
import './PortfolioLayout.css'
import { 
    GiLotusFlower,
    GiFox,
    GiMonaLisa
} from 'react-icons/gi'
import {IoMdImages, IoIosCreate} from 'react-icons/io'
import { IconContext } from "react-icons"


function PortfolioLayout () {
    
    return (
        <>
            <div className="link-ctn">
                <Link 
                    to={'/portfolio/rastline'}
                >
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <GiLotusFlower />
                    </IconContext.Provider>
                    <p>Botanične ilustracije</p>
                </Link>

                <Link to={'/portfolio/zivali'}>
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <GiFox />
                    </IconContext.Provider>
                    <p>Živalske ilustracije</p>

                </Link>

                <Link to={'/portfolio/digital'}>
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <IoIosCreate/>
                    </IconContext.Provider>
                    <p>Digitalna ilustracija</p>
                </Link>

                <Link to={'/portfolio/portreti'}>
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <GiMonaLisa />
                    </IconContext.Provider>
                    <p>Portreti</p>
                </Link>


                <Link to={'/portfolio/ostalo'} className='last-link'>
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <IoMdImages />
                    </IconContext.Provider>
                    <p>Ostalo</p>
                </Link>
            </div>
            <Outlet />
        </>
    )
}

export default PortfolioLayout
