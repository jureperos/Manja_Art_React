import React, { useState } from 'react';
import Search from './search';
import "./TextInput.css";


const TextInput = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <div className="input-ctn">
                <input type="text" value={text} onChange={handleChange} className="input-box"/>
            </div>
            <Search text={text}/>
        </div>
    );
};

export default TextInput;
