import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'
import { GoThreeBars } from 'react-icons/go'
import { IconContext } from 'react-icons';
import image from './assets/Cover_odzadje.png'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className='navbar'>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    <IconContext.Provider value={{ className: 'menu-icon' }}>
                        <GoThreeBars />
                    </IconContext.Provider>
                </button>
                <div className={`nav-list ${menuOpen ? 'open' : 'closed'}`}>

                    <Link className=" menu-item" to={'/'}>
                        Domov {' '} {' '} <span>{'\u2B24'}</span>
                    </Link>

                    <Link className="menu-item" to={'/portfolio'}>
                        Portfelj {' '} {' '} <span>{'\u2B24'}</span>
                    </Link>

                    <Link className=" menu-item" to={'/naprodaj'}>
                        Naprodaj {' '} {' '} <span>{'\u2B24'}</span>
                    </Link>

                    <Link className=" menu-item" to={'/zivljenjepis'}> Življenjepis {' '} {' '} <span>{'\u2B24'}</span>
                    </Link>

                    <Link className=" menu-item" to={'/kontakt'}>
                        Kontakt {' '} {' '} <span>{'\u2B24'}</span>
                    </Link>
                </div>
            </div>
            <div className='banner'><img className="MainImg" src={ image } alt="" /></div>
        </div>
    )
}

export default Navbar