import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './SetImages.css';
import { ImageHandlerProps } from '../search/ImageHandler';
import MyLightbox from './lightbox/MyLightbox';

import { useState } from 'react';


function SetImages (props: ImageHandlerProps) {
    const [currIndex, setCurrIndex] = useState(0);
    const [lboxUnmounted, setLboxUnmounted] = useState(true);

    //call this from MyLightbox to indicate the component unmounted
    function handleLboxUnmount() {
        setLboxUnmounted(true);
    }

    return (
        <>
            <div className={`all-img-container ${props.frameNum}`}>
                {props.imgArr.map((image, index) => {
                    return (
                        <div
                        key={image.src}
                        className='img-container'
                        onClick={
                            () => {
                                setCurrIndex(index);
                                setLboxUnmounted(false)
                            }
                        }>
                            <LazyLoadImage
                                height={props.height}
                                alt={ image.title }
                                src={ image.src }
                                effect='blur'
                            />
                            <div className='img-text'>
                                <p className='img-descr top-descr'> {image.title} <br/> <em>{image.sciName}</em> </p>
                                {("medium" in image)?(
                                <>
                                <p className='img-descr'> {image.medium} </p>
                                <p className='img-descr'> {image.dimensions} </p>
                                <p className='img-descr img-price'><span>{image.price}</span> </p>
                                </>
                                )
                                : false}
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

export default SetImages;
