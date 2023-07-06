import React, { useState } from 'react';
import ColorContext from './Context';


const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'yellow' ? 'black' : 'yellow'));
  };

  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider