import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { GoThreeBars } from 'react-icons/go';
import { IconContext } from 'react-icons';
import banner from './assets/Cover_odzadje.png';

function Navbar() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }
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
                <div>
                    <button className="menu-button" 
                    onClick={ function () { setMenuOpen(!menuOpen) }}>
                        <IconContext.Provider value={{ className: 'menu-icon' }}>
                            <GoThreeBars />
                        </IconContext.Provider>
                    </button>
                    <div className={`nav-list ${menuOpen ? 'open' : 'closed'} bigger-width`}>

                        <Link 
                        className={`menu-item first`}
                        id='big-width-links'
                        to={'/'}>
                            Domov
                        </Link>

                        <Link 
                        className={`menu-item second`}
                        id='big-width-links'
                        to={'/portfolio'}>
                            Portfelj
                        </Link>

                        <Link 
                        className={`menu-item third`}
                        id='big-width-links'
                        to={'/naprodaj'}>
                            Naprodaj
                        </Link>

                        <Link 
                        className={`menu-item fourth`}
                        id='big-width-links'
                        to={'/zivljenjepis'}> 
                            Življenjepis
                        </Link>

                        <Link 
                        className={`menu-item fifth`}
                        id='big-width-links'
                        to={'/blog'}> 
                            Blog
                        </Link>

                        <Link 
                        className={`menu-item sixth`}
                        id='big-width-links'
                        to={'#'}
                        onClick={scrollToBottom}
                        >
                            Kontakt
                        </Link>
                    </div>
                </div>
                <div className='signature'>
                    <Link className="signature-link"
                        to={'/'}
                    >
                        Manja Tišler
                    </Link>
                </div>
            </div>
            <img className="banner" src={ banner } alt="" />
        </div>
    )
}

export default Navbar