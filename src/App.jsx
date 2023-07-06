import React from 'react';
import ColorProvider from './ColorContext';
import ComponentOne from './Component';
import ComponentTwo from './Component2';
import ComponentTre from './Component3';


const App = () => {
  return (
  
    <ColorProvider>
    <ComponentOne />
    <ComponentTwo />
    <ComponentTre/>
      
    </ColorProvider>
  
  );
};

export default App;
