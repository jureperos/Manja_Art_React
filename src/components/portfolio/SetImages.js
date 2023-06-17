import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './SetImages.css';

import MyLightbox from './lightbox/MyLightbox' 

import { useState } from 'react';


function SetImages (props) {
    const [currIndex, setCurrIndex] = useState(0);
    const [lboxUnmounted, setLboxUnmounted] = useState(true);
  
    //call this from MyLightbox to indicate the component unmounted
    function handleLboxUnmount() {
        setLboxUnmounted(true);
    }

    return (
        <> 
            <div className={`all-img-container ${props.frameNum}`}>
                {props.imgArr.map((image) => {
                    return (
                        <div 
                        className='img-container'
                        onClick={
                            () => {
                                setCurrIndex(image.index);
                                setLboxUnmounted(false)
                            }
                        }>
                            <LazyLoadImage 
                                height={props.height}
                                alt={ image.title }
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

                {!lboxUnmounted && <MyLightbox
                        imgData={props}
                        currIndex={currIndex} 
                        onUnmount={handleLboxUnmount}
                        mountState={lboxUnmounted}
                />}

            </div>
        </>
          
    )
}

export default SetImages
