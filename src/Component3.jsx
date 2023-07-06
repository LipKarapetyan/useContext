import React, { useContext } from 'react';
import ColorContext from './Context';

const ComponentTre = () => {
  const { color } = useContext(ColorContext);

  return (
    <div>
      
      <div>
        <h1  style={{ color }}>Hello React</h1>
      </div>
    </div>
  );
};

export default ComponentTre;