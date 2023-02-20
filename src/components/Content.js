import { Routes, Route } from "react-router-dom"
import './Content.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import SetImages from "./portfolio/SetImages";
import PortfolioLayout from "./portfolio/PortfolioLayout";
import Zivljenjepis from "./Zivljenjepis";
import NaprodajLayout from "./NaprodajLayout";


function Content () {

    return (
        <div className="content">
            <Navbar />
            <div className=".routes">
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/portfolio' element={ <PortfolioLayout /> } >
                        <Route index element={ <SetImages/> }  />
                        <Route path="rastline" element={ <SetImages /> } />
                        <Route path="zivali" element={ <SetImages /> } />
                        <Route path="portreti" element={ <SetImages /> } />
                        <Route path="linorez" element={ <SetImages /> } />
                        <Route path="ostalo" element={ <SetImages /> } />
                    </Route>
                    <Route path="/naprodaj" element={ <NaprodajLayout /> }>
                        <Route index element={ <SetImages /> } />
                    </Route>
                    <Route path="/zivljenjepis" element={ <Zivljenjepis /> } />
                </Routes>
            </div>
                <Footer />
        </div>
    )
}

export default Content