import { Routes, Route } from "react-router-dom"
import './Content.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import SetImages from "./portfolio/SetImages";
import PortfolioLayout from "./portfolio/PortfolioLayout";
import Zivljenjepis from "./Zivljenjepis";
import NaprodajLayout from "./NaprodajLayout";
import NotFound from "./NotFound";
import RastlineArr from './portfolio/RaslineArr';
import ZivaliArr from './portfolio/ZivaliArr';
import PortretiArr from './portfolio/PortretiArr';
import LinorezArr from  './portfolio/LinorezArr';
import OstaloArr from './portfolio/OstaloArr';
import NaprodajArr from './portfolio/NaprodajArr';


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
                                <SetImages
                                imgArr={RastlineArr}
                                height={220}/> 
                            } 
                        />

                        <Route 
                            path="rastline" 
                            element={ 
                                <SetImages 
                                imgArr={RastlineArr}
                                height={220}/> 
                            } 
                        />

                        <Route 
                            path="zivali" 
                            element={ 
                                <SetImages 
                                imgArr={ZivaliArr}
                                height={200}
                                frameNum={"frame-num"} /> 
                            } 
                        />

                        <Route 
                            path="portreti" 
                            element={ 
                                <SetImages 
                                imgArr={PortretiArr}
                                height={200}/> 
                            } 
                        />

                        <Route 
                            path="linorez" 
                            element={ 
                                <SetImages 
                                imgArr={LinorezArr}
                                height={200}/> 
                            } 
                        />

                        <Route 
                            path="ostalo" 
                            element={ 
                                <SetImages 
                                imgArr={OstaloArr}
                                height={200}
                                frameNum={"frame-num"}/> 
                            } 
                        />
                    </Route>
                    <Route path="/naprodaj" element={ <NaprodajLayout /> }>
                        <Route 
                            index element={ 
                                <SetImages 
                                imgArr={NaprodajArr}
                                height={200}
                                frameNum={"frame-num"}/> 
                            }
                        />
                    </Route>
                    <Route path="/zivljenjepis" element={ <Zivljenjepis /> } />
                    <Route path="/*" element={ <NotFound /> } />
                </Routes>
            </div>
                <Footer />
        </div>
    )
}

export default Content