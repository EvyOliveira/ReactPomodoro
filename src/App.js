import React from "react";
import { useTimer } from "use-timer";
import { formatTime } from "./utils/formatTime";

function App() {

    const timerConfig = {
      initialTime: 1500,
      timerType: "DECREMENTAL",
      endTime: 0
    };

    const { time, start, pause, reset } = useTimer({ timerConfig });
  
    console.log("Time:", time);
    console.log("Isso vai ser exibido a cada avanço no timer!");
  
    let completeCycles = 0;
    let breaks = 0;
    let isBreak = false;
  
    if(time === 0 && !isBreak) {
      completeCycles++
      breaks++
  
      isBreak = true;
  
      if(breaks < 4) 
      timerConfig.initialTime = 300;
  
      else {
        timerConfig.initialTime = 900;
        breaks = 0;
      }
  
      reset();
      start();
    }
    else if(time === 0 && isBreak) {
      isBreak = false;
      timerConfig.initialTime = 1500
  
      reset();
      start();
    }
  
  
    return (
      <React.Fragment>
        <div>
          <div>
            <button onClick={start}>Start</button>
            <button value={(time)} onClick={pause}>
              Pause
            </button>
            <button onClick={reset}>Reset</button>
          </div>
          <p>Elapsed time: {formatTime(timerConfig.initialTime)}</p>
          <p>Cycles completed: {completeCycles}</p>
        </div>
      </React.Fragment>
    );
  }

  export default App;

