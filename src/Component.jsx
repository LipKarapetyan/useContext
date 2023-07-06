import React, { useContext,useState } from 'react';
import ColorContext from './Context';
import darkPicture  from '/darkk.png';
import lightPicture from '/lightt.png'



const ComponentOne = () => {
  const { color, toggleColor } = useContext(ColorContext);
  const [isDark, setIsDark] = useState(false);

  const handleButtonClick = () => {
    setIsDark(!isDark);
    toggleColor();
  };


  return (
    <div >
    <div >
         <button  onClick={handleButtonClick}>
        {isDark ? <img  src={darkPicture} alt="Dark Picture" width="50" height="50" /> : <img width="50" height="50" src={lightPicture} alt="Light Picture" />}
      </button>
      <div>
        <h1  style={{ color }}>Hello React</h1>
      </div>
    </div>
    </div>
  );
};

export default ComponentOne;
