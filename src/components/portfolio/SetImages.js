import RastlineArr from './RaslineArr';
import ZivaliArr from './ZivaliArr';
import PortretiArr from './PortretiArr';
import LinorezArr from  './LinorezArr';
import OstaloArr from './OstaloArr';
import NaprodajArr from './NaprodajArr';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './SetImages.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";


function SetImages () {
    const [lBoxOpen, setlBoxOpen] = useState(false)
    const [currIndex, setcurrIndex] = useState(0);
    const location = useLocation();
    const path = location.pathname;
    let imgArray = []
    let frameNum = ''
    let height = null

    //matching the appropriate image array to each path
    switch(path) {
        case '/portfolio':
            imgArray = RastlineArr;
            height = 220
            break;
        case '/portfolio/rastline':
            imgArray = RastlineArr;
            height = 220
            break;
        case '/portfolio/zivali':
            imgArray = ZivaliArr;
            frameNum = 'frame-num'
            height = 200
            break;
        case '/portfolio/portreti':
            imgArray = PortretiArr;
            height = 200
            break;
        case '/portfolio/linorez':
            imgArray = LinorezArr;
            height = 200
            break;
        case '/portfolio/ostalo':
            imgArray = OstaloArr;
            height = 200
            frameNum = 'frame-num'
            break;
        case '/naprodaj':
            imgArray = NaprodajArr
            height = 200
            break;
        default:
            console.log('path ne obstaja')
    }

    function openLightbox() {
        if (lBoxOpen === true) {
            //iterating through imgArray to populate lightbox slides
            const slides = imgArray.map((image) => {
                return { 
                    src: image.src,
                    description: image.description,
                    padding: image.padding
                };
            });

            return (
                <>
                    <Lightbox 
                        open={lBoxOpen}
                        close={() => setlBoxOpen(false)}
                        index= {currIndex}
                        slides={slides}
                        carousel={slides.padding}
                        plugins={[Captions, Thumbnails, Zoom, Fullscreen]}
                        thumbnails={{
                            
                        }}
                        zoom={{
                            maxZoomPixelRatio: 3
                        }}
                    />
                </>
            )
            
        } else return null

    }

    return (
        //Using map method to dinamicaly populate images based on input array
        <div className={`all-img-container ${frameNum}`}>
            {imgArray.map((image) => {
                return (
                    <div 
                    className='img-container'
                    onClick={
                        () => {
                            setlBoxOpen(true);
                            setcurrIndex(image.index);
                        }
                    } >
                        <LazyLoadImage 
                            height={height}
                            alt={ 'nika zaenkrat' }
                            src={ image.src }
                            offset={ 100 }
                            effect='blur'
                        />
                        <div className='img-text'>
                            <p className='img-descr top-descr'> {image.title} <br/> <em>{image.sciName}</em> </p>
                            <p className='img-descr'> {image.medium} </p>
                            <p className='img-descr'> {image.dimensions} </p>
                            <p className='img-descr img-price'> {image.price} </p>
                        </div>
                    </div>
                )
            })}
            {openLightbox()}
        </div>
    )
}

export default SetImages