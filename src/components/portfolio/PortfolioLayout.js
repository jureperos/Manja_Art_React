import { Link, Outlet } from "react-router-dom"
import './PortfolioLayout.css'
import { 
    GiLotusFlower,
    GiFox,
    GiMonaLisa
} from 'react-icons/gi'
import {BiPaintRoll} from 'react-icons/bi'
import {IoMdImages} from 'react-icons/io'
import { IconContext } from "react-icons"
import { useRef, useEffect } from 'react'


function PortfolioLayout () {
    //First link focused on mount
    // const linkRef = useRef(null);

    // useEffect(() => {
    //     linkRef.current.focus();
    // }, []);
    


    return (
        <>
            <div className="link-ctn">
                <Link 
                to={'/portfolio/rastline'}
                >
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <GiLotusFlower />
                    </IconContext.Provider>
                    <p>Rastline</p>
                </Link>

                <Link to={'/portfolio/zivali'}>
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <GiFox />
                    </IconContext.Provider>
                    <p>Živali</p>

                </Link>

                <Link to={'/portfolio/portreti'}>
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <GiMonaLisa />
                    </IconContext.Provider>
                    <p>Portreti</p>
                </Link>

                <Link to={'/portfolio/linorez'}>
                    <IconContext.Provider value={{ className: 'link-icon' }}>
                        <BiPaintRoll />
                    </IconContext.Provider>
                    <p>Linorez</p>
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