import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import './Content.css';


function Content () {
    return (
        <div className="content">
            <Navbar />
            <div className=".routes">
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </div>  
            <Footer />
        </div>
    )
}

export default Content