import React, { useState, useEffect, useRef } from 'react';
import Search from './search';
import "./ImageHandler.css";
import SetImages from '../portfolio/SetImages';
import { ImageAttributes, NaprodajInterface } from '../portfolio/arrayInterface';

export type ImageHandlerProps = {
    imgArr:(ImageAttributes | NaprodajInterface)[];
    height: string;
    frameNum?: string
}

const ImageHandler = ({imgArr, height, frameNum}: ImageHandlerProps) => {
    const [text, setText] = useState('');
    const [foundImgs, setFoundImages] = useState<ImageAttributes[]>([]);
    const [isImageSearched, setIsImageSearched] = useState(false);
    const searchFound = useRef(true);

    const notFound = <h1 className='not-found'> Ni zadetkov! </h1>;
    const showImages = (
            <div>
                 <SetImages
                 //check if searchArr is empty else show all results
                 imgArr={(foundImgs.length === 0) ? imgArr: foundImgs}
                 height={height}
                 frameNum={frameNum}
                />
            </div>
    );

    // reset search bar and images when clicking different link
    useEffect(() => {
        setText('');
        setFoundImages([]);
    }, [imgArr])

    /* this checks if search found images or the term is not found and
    triggers the notFound component */
    useEffect(() => {
        if (isImageSearched && foundImgs.length === 0) {
            searchFound.current = false;
        } else {
            searchFound.current = true;
        }

        return () => {
            setIsImageSearched(false);
        }
    }, [isImageSearched, foundImgs])

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText((event.target).value);

        if (text.length === 1) {
            setFoundImages([]);
        }
    };

    const handleFoundImage = (foundArr: ImageAttributes) => {
        setFoundImages( (prevArr) => [...prevArr, foundArr]);

    };

    const handleSearchClick = () => {
        Search(text, handleFoundImage, imgArr);
        setIsImageSearched(true);
    };

    const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            setFoundImages([]);
            handleSearchClick();
        }
        if (event.key === 'Enter' && text.length === 0) {
            setIsImageSearched(false);
        }
    };

    const handleSearchIcon = () => {
        setFoundImages([]);
        handleSearchClick();

        if (text.length === 0) {
            setIsImageSearched(false);
        }
    }

    return (
        <div>
            <div className="input-ctn">
                <input
                    type="text"
                    placeholder="Išči..."
                    value={text}
                    onChange={handleTextChange}
                    onKeyDown={handleEnterKey}
                    className="input-box"/>

                    <button className="search-btn" onClick={handleSearchIcon}>
                        <img className="lupa-img" src='/misc_images/lupa.png' alt="lupa"/>
                    </button>
            </div>
            {searchFound.current ? showImages: notFound}
        </div>
    );
};

export default ImageHandler;
