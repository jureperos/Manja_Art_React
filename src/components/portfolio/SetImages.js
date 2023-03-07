
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './SetImages.css';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";


function SetImages (props) {
    const [lBoxOpen, setlBoxOpen] = useState(false)
    const [currIndex, setcurrIndex] = useState(0);

    function openLightbox() {
        if (lBoxOpen === true) {
            //iterating through imgArray to populate lightbox slides
            const slides = props.imgArr.map((image) => {
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
        //using a map method to iterate and access the imgArray objects
        <div className={`all-img-container ${props.frameNum}`}>
            {props.imgArr.map((image) => {
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
                            height={props.height}
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