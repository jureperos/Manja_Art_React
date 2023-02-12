import Rastline from "./RaslineObj"
import { LazyLoadImage } from "react-lazy-load-image-component"
import './RastlinePublic.css'


function RastlinePublic () {
    return (
        <div className="plant-img">
            {Object.entries(Rastline).map(([key, value]) => {
                return (
                        <LazyLoadImage 
                            height={400}
                            alt={ key }
                            src={ value }
                            offset={ 20 }
                        />
                )
            })}
        </div>
    )
}

export default RastlinePublic