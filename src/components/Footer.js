import './Footer.css';
import { IconContext } from 'react-icons';
import { FaFacebookF,
        FaInstagram, 
        FaLinkedinIn,
        } from "react-icons/fa";


function Footer() {

    return (
    <div className='contact'>
        <div className='social'>
            <a href="https://www.facebook.com/ManjaTislerArt/" target="_blank" className='contact-icons'>
                <IconContext.Provider value={{ className: 'footer-icon' }}>
                    <FaFacebookF />
                </IconContext.Provider>
            </a>

            <a href="https://www.instagram.com/manjatisler/" target="_blank" className='contact-icons'>
                <IconContext.Provider value={{ className: 'footer-icon' }}>
                    <FaInstagram />
                </IconContext.Provider>
            </a>

            <a href="https://www.linkedin.com/in/manja-ti%C5%A1ler-895b8a135/" target="_blank" className='contact-icons'>
                <IconContext.Provider value={{ className: 'footer-icon' }}>
                    <FaLinkedinIn />
                </IconContext.Provider>
            </a>
        </div>
        <div 
            className= 'email' > manjatisler.art@gmail.com
        </div>

    </div>
    )
}

export default Footer