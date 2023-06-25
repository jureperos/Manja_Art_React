import React, { useState, useEffect } from 'react';
import Search from './search';
import "./ImageHandler.css";
import SetImages from '../portfolio/SetImages';
import lupa from "./assets/lupa.png"

const ImageHandler = ({imgArr, height, frameNum}) => {
    const [text, setText] = useState('');
    const [foundImg, setFoundImage] = useState([]);

    // reset search bar and images when clicking different link
    useEffect(() => {
        setText('');
        setFoundImage([]);
    }, [imgArr]) 

    const handleTextChange = (event) => {
        setText(event.target.value);

        if (text.length < 3) {
            setFoundImage([]);
        }
    };

    const handleFoundImage = (foundArr) => {
        setFoundImage( (prevArr) => [...prevArr, foundArr]);
    };

    const handleSearchClick = () => {
        Search(text, handleFoundImage, imgArr);
    };

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            setFoundImage([]);
            handleSearchClick(); 
        }
    }

    return (
        <div>
            <div className="input-ctn">
                <input type="text" placeholder="Išči..." value={text} onChange={handleTextChange} onKeyDown={handleEnterKey} className="input-box"/>
                    <button className="search-btn" onClick={() => {
                        setFoundImage([]);
                        handleSearchClick();
                    }}>
                        <img className="lupa-img" src={lupa} alt="lupa"/>
                    </button>
            </div>
            <div>        
                 <SetImages
                 //check if searchArr is empty else show all results 
                 imgArr={(foundImg.length === 0) ? imgArr: foundImg}
                 height={height}
                 frameNum={frameNum} 
                />
            </div>
        </div>
    );
};

export default ImageHandler;
