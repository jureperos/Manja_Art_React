import { Routes, Route } from "react-router-dom"
import './Content.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import RastlinePublic from "./portfolio/RastlinePublic";
import Portfelj from "./portfolio/Portfelj";
import PortfolioNav from "./portfolio/PortfolioNav";
import MyLightbox from "./portfolio/MyLightbox";



function Content () {
    return (
        <div className="content">
            <Navbar />
            <div className=".routes">
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/portfolio' element={ <PortfolioNav /> } >
                        <Route index element={ <Portfelj/> }  />
                        <Route path="rastline" element={ <RastlinePublic /> } />
                    </Route>
                </Routes>
            </div>  
            <Footer />
        </div>
    )
}

export default Content