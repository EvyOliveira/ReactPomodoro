import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import App from './App';


function CycleCounter(){
    const [counter, setCounter] = useState(0);

    const { time, start, pause, reset } = useTimer({
        endTime: 0,
        initialTime: 15,
      });

    function IncrementCounter() {

        if (counter > 4) {
            
        } else {
            setCounter(counter + 1);
            console.log("A new cycle will start!")
        }
    }

    return (
        <React.Fragment>
          <div>
          <h1>Contador: {setCounter}</h1>
          </div>
          <App />
        </React.Fragment>
      ); 
    }

export default CycleCounter;