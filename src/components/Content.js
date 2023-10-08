import { Routes, Route } from "react-router-dom";
import './Content.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import PortfolioLayout from "./portfolio/PortfolioLayout";
import Zivljenjepis from "./Zivljenjepis";
import NaprodajLayout from "./NaprodajLayout";
import NotFound from "./NotFound";
import Blog from "./blog/Blog";
import ImageHandler from "./search/ImageHandler";

import RastlineArr from './portfolio/RaslineArr';
import ZivaliArr from './portfolio/ZivaliArr';
import PortretiArr from './portfolio/PortretiArr';
import OstaloArr from './portfolio/OstaloArr';
import NaprodajArr from './portfolio/NaprodajArr';
import BlogRoute from "./blog/BlogRoute";
import DigitalnaArr from "./portfolio/DigitalnaArr";
import MergedArr from "./portfolio/MergedArr";

function Content () {
    return (
        <div className="content">
            <Navbar />
            <div className=".routes">
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/portfolio' element={ <PortfolioLayout /> } >

                    <Route
                    index element={ 
                        <ImageHandler
                        imgArr={MergedArr}
                        height={180}
                        frameNum={""}
                        />
                    } />

                    <Route 
                    path="rastline" 
                    element={ 
                        <ImageHandler 
                        imgArr={RastlineArr}
                        height={220}
                        /> 
                    } />

                    <Route 
                    path="zivali" 
                    element={ 
                        <ImageHandler 
                        imgArr={ZivaliArr}
                        height={180}
                        frameNum={"frame-num"} 
                        /> 
                    } />

                    <Route 
                    path="portreti" 
                    element={ 
                        <ImageHandler 
                        imgArr={PortretiArr}
                        height={180}
                        /> 
                    } />

                    <Route 
                    path="digital" 
                    element={ 
                        <ImageHandler 
                        imgArr={DigitalnaArr}
                        height={180}
                        /> 
                    } />

                    <Route  
                    path="ostalo" 
                    element={
                        <ImageHandler 
                        imgArr={OstaloArr}
                        height={180}
                        frameNum={"frame-num"}
                        /> 
                    } />
                </Route>

                <Route path="/naprodaj" element={ <NaprodajLayout /> }>
                    <Route 
                    index element={ 
                        <ImageHandler 
                        imgArr={NaprodajArr}
                        height={200}
                        frameNum={"frame-num"}/> 
                    }/>

                </Route>
                <Route path="/zivljenjepis" element={ <Zivljenjepis /> } />
                <Route path="/blog" element={ <Blog /> } />
                <Route path="/blog/:id" element={ <BlogRoute /> }/>
                <Route path="/*" element={ <NotFound /> } />
            </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Content
