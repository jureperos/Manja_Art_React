import React, { useState, useEffect, useRef } from 'react';
import Search from './search';
import "./ImageHandler.css";
import SetImages from '../portfolio/SetImages';
import lupa from "./assets/lupa.png"

const ImageHandler = ({imgArr, height, frameNum}) => {
    const [text, setText] = useState('');
    const [foundImg, setFoundImage] = useState([]);
    const [isImageSearched, setIsImageSearched] = useState(false);
    const searchFound = useRef(true);

    const notFound = <h1 className='not-found'> Ni zadetkov! </h1>;
    const showImages = (
            <div>        
                 <SetImages
                 //check if searchArr is empty else show all results 
                 imgArr={(foundImg.length === 0) ? imgArr: foundImg}
                 height={height}
                 frameNum={frameNum} 
                />
            </div>
    );

    // reset search bar and images when clicking different link
    useEffect(() => {
        setText('');
        setFoundImage([]);
    }, [imgArr]) 

    /* this checks if search found images or the term is not found and
    triggers the notFound component */
    useEffect(() => {
        if (isImageSearched && foundImg.length === 0) {
            searchFound.current = false;
        } else {
            searchFound.current = true;
        }

        return () => {
            setIsImageSearched(false);
        }
    }, [isImageSearched, foundImg])

    const handleTextChange = (event) => {
        setText(event.target.value);

        if (text.length === 1) {
            setFoundImage([]);
        }
    };

    const handleFoundImage = (foundArr) => {
        setFoundImage( (prevArr) => [...prevArr, foundArr]);

    };

    const handleSearchClick = () => {
        Search(text, handleFoundImage, imgArr);
        setIsImageSearched(true);
    };

    const handleEnterKey = (event) => {

        if (event.key === 'Enter') {
            setFoundImage([]);
            handleSearchClick(); 
        }
        if (event.key === 'Enter' && text.length === 0) {
            setIsImageSearched(false);
        }
    };
    
    const handleSearchIcon = () => {
        setFoundImage([]);
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
                        <img className="lupa-img" src={lupa} alt="lupa"/>
                    </button>
            </div>
            {searchFound.current ? showImages: notFound}
        </div>
    );
};

export default ImageHandler;
