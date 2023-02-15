import RastlineArr from "./RaslineObj";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './RastlinePublic.css';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"



function RastlinePublic () {
    const [lBoxOpen, setlBoxOpen] = useState(false)

    const currIndex = function getIndex(index) {return index}


    function openLightbox() {
        if (lBoxOpen === true) {
            const slides = RastlineArr.map(
                (rastline) => {return {src: rastline.src};})
            console.log(slides)
            return (
                <div>
                    <Lightbox 
                        open={lBoxOpen}
                        close={() => setlBoxOpen(false)}
                        index= {currIndex}
                        slides={slides}
                    />
                </div>
            )
            
        } else return null

    }


    return (
        //using a map method to iterate and access the RastlineArr array objects
        <div>
            {RastlineArr.map((rastline) => {
                return (
                    <div onClick={
                        () => {
                            setlBoxOpen(true);
                            getIndex(rastline.index);
                        }
                    } >
                        <LazyLoadImage 
                            height={350}
                            alt={ 'nika zaenkrat' }
                            src={ rastline.src }
                            offset={ 100 }
                            effect='blur'
                        />
                        <p>{rastline.text}</p>
                    </div>
                )
            })}

            {openLightbox()}
        </div>
    )
}

export default RastlinePublic