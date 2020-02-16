import React from "react";
import { useTimer } from "use-timer";
import { formatTime } from "./utils/formatTime";

const timerConfig = {
initialTime : 25,
timerType : "DECREMENTAL",
endTime : 0,
}

let breaks = 0;
let completeCycles = 0;
let isBreak = false;

function App() {
  const { time, start, pause, reset } = useTimer(timerConfig);

  console.log("Time:", time);
  console.log("Isso vai ser exibido a cada avanço no timer!");

  if (time === 0 && !isBreak) {
    completeCycles++;
    breaks++;
    
    isBreak = true;

    if (time > 0 && !isBreak) timerConfig.initialTime = 5; {
    completeCycles++;
    breaks++; 
    isBreak = true;
    }
    

    if (completeCycles >= 1 && !isBreak) timerConfig.initialTime = 15;
      breaks = ((breaks++) + 1);
      completeCycles = ((completeCycles++) + 3);
    

    reset();
    start();

  }} if (time === 0 && !isBreak) {
    breaks = ((breaks++) +3);
    isBreak = false;
    timerConfig.initialTime = 25;

    reset();
    start();
  }

  return (
    <div>
      <div>
      <p>Elapsed time: {formatTime(time)}</p>
      <p>Cycles completed: {completeCycles}</p>
      </div>
        <button type="button" className="btn btn-outline-success" onClick={start}>
          Start
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          value={time}
          onClick={pause}
        >
          Pause
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={reset}>
          Reset
        </button>
      </div>
  );
}

export default App;
