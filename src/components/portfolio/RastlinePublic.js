import RastlineArr from "./RaslineObj";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './RastlinePublic.css';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";


function RastlinePublic () {
    const [lBoxOpen, setlBoxOpen] = useState(false)
    const [currIndex, setcurrIndex] = useState(0);


    function openLightbox() {
        if (lBoxOpen === true) {
            //all paths of the images are stored as an object for lightbox use
            const slides = RastlineArr.map((rastline) => {
                return { 
                    src: rastline.src,
                    title: rastline.title,
                    description: rastline.description,
                };
            });

            return (
                <>
                    <Lightbox 
                        open={lBoxOpen}
                        close={() => setlBoxOpen(false)}
                        index= {currIndex}
                        slides={slides}
                        plugins={[Captions, Thumbnails]}
                        thumbnails={{
                            
                        }}
                    />
                </>
            )
            
        } else return null

    }


    return (
        //using a map method to iterate and access the RastlineArr array objects
        <div className="img-container">
            {RastlineArr.map((rastline) => {
                return (
                    <div onClick={
                        () => {
                            setlBoxOpen(true);
                            setcurrIndex(rastline.index);
                        }
                    } >
                        <LazyLoadImage 
                            height={350}
                            alt={ 'nika zaenkrat' }
                            src={ rastline.src }
                            offset={ 100 }
                            effect='blur'
                        />
                        <p>{rastline.title}</p>
                    </div>
                )
            })}

            {openLightbox()}
        </div>
    )
}

export default RastlinePublic