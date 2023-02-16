import RastlineArr from "./RaslineObj";
import ZivaliArr from "./ZivaliObj";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './SetImages.css';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";


function SetImages () {
    const [lBoxOpen, setlBoxOpen] = useState(false)
    const [currIndex, setcurrIndex] = useState(0);
    const location = useLocation();
    const path = location.pathname;
    let imgArray = []

    switch(path) {
        case '/portfolio':
            imgArray = RastlineArr;
            break;
        case '/portfolio/rastline':
            imgArray = RastlineArr;
            break;
        case '/portfolio/zivali':
            imgArray = ZivaliArr;
            break;
    }

    function openLightbox() {
        if (lBoxOpen === true) {
            //iterating through imgArray to populate lightbox slides
            const slides = imgArray.map((image) => {
                return { 
                    src: image.src,
                    title: image.title,
                    description: image.description,
                };
            });

            return (
                <>
                    <Lightbox 
                        open={lBoxOpen}
                        close={() => setlBoxOpen(false)}
                        index= {currIndex}
                        slides={slides}
                        plugins={[Captions, Thumbnails, Zoom]}
                        thumbnails={{
                            
                        }}
                    />
                </>
            )
            
        } else return null

    }

    return (
        //using a map method to iterate and access the imgArray array objects
        <div className="img-container">
            {imgArray.map((image) => {
                return (
                    <div onClick={
                        () => {
                            setlBoxOpen(true);
                            setcurrIndex(image.index);
                        }
                    } >
                        <LazyLoadImage 
                            height={300}
                            alt={ 'nika zaenkrat' }
                            src={ image.src }
                            offset={ 100 }
                            effect='blur'
                        />
                        <div className="img-text">
                            <p>{image.title}</p>
                        </div>
                    </div>
                )
            })}
            {openLightbox()}
        </div>
    )
}

export default SetImages