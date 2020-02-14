import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import App from './App';


function CycleCounter(props) {

  const step = props.step;
  if (step <= 4) {
    return <App />;
  }
  return <App />;
  
    return (
        <React.Fragment>
          <div>
          <h1>Contador: {CycleCounter}</h1>
          </div>
          <App />
        </React.Fragment>
      );
  };

export default CycleCounter;