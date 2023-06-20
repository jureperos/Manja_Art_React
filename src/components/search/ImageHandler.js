import React, { useState } from 'react';
import Search from './search';
import "./ImageHandler.css";
import SetImages from '../portfolio/SetImages';
import MergedArr from '../portfolio/MergedArr';

const ImageHandler = () => {
    const [text, setText] = useState('');
    const [foundImg, setFoundImage] = useState([]);

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
        Search(text, handleFoundImage);
    };

    return (
        <div>
            <div className="input-ctn">
                <input type="text" value={text} onChange={handleTextChange} className="input-box"/>
                    <button onClick={() => {
                        setFoundImage([]);
                        handleSearchClick();
                    }}> išči </button>
            </div>
            <div>        
                 <SetImages
                 //check if searchArr is empty else show all results with MergedArr
                 imgArr={(foundImg.length === 0) ? MergedArr: foundImg}
                 height={200}
                />
            </div>
        </div>
    );
};

export default ImageHandler;
