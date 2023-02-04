import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'
import { GoThreeBars } from 'react-icons/go'
import { IconContext } from 'react-icons';
import image from './assets/Cover_odzadje.png'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.menu-button')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div>
            <div className='navbar'>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    <IconContext.Provider value={{ className: 'menu-icon' }}>
                        <GoThreeBars />
                    </IconContext.Provider>
                </button>
                <div className={`nav-list ${menuOpen ? 'open' : 'closed'}`}>

                    <Link className="menu-item" to={'/'}>
                        Domov
                    </Link>

                    <Link className="menu-item" to={'/portfolio'}>
                        Portfelj
                    </Link>

                    <Link className=" menu-item" to={'/naprodaj'}>
                        Naprodaj
                    </Link>

                    <Link className=" menu-item" to={'/zivljenjepis'}> Življenjepis
                    </Link>

                    <Link className=" menu-item" to={'/kontakt'}>
                        Kontakt
                    </Link>
                </div>
            </div>
            <img className="banner" src={ image } alt="" />
        </div>
    )
}

export default Navbar