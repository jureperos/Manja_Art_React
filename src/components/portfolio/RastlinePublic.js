import RastlineArr from "./RaslineObj";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './RastlinePublic.css';
import { useState } from 'react';



function RastlinePublic () {
    const [ImgOpen, setImgOpen] = useState(false)

    function whatState() {
        setImgOpen(!ImgOpen)
    }

        //finds which image is being clicked so the lightbox opens on that image
    function lightBoxActivate (path) {
        if (ImgOpen === false) {
            const imgPath = path
            return (
                
            )
        } else return console.log('imgopentrue')
    }

    return (
        //using a map method to iterate and access the RastlineArr array objects
        <div>
            {RastlineArr.map((rastline) => {
                return (
                    <div onClick={() => {lightBoxActivate(rastline.path); whatState();}} >
                        <LazyLoadImage 
                            height={350}
                            alt={ 'nika zaenkrat' }
                            src={ rastline.path }
                            offset={ 100 }
                            effect='blur'
                        />
                        <p>{rastline.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RastlinePublic