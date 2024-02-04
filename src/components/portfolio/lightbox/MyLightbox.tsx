import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

export default function MyLightbox({imgData, currIndex, onUnmount, mountState }) {

    if (!mountState) {
        //iterating through imgArray to populate lightbox slides
        const slides = imgData.imgArr.map((image) => {
            return { 
                src: image.src,
                description: image.description,
                padding: image.padding
            };
        });

        return (
            <>
            <Lightbox 
            open={!mountState}
            close={() => onUnmount()}
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
