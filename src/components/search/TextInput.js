import React, { useState } from 'react';
import Search from './search';


const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <Search 
        text={text}
      />
    </div>
  );
};

export default TextInput;
