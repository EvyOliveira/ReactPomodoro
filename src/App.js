import React from "react";
import { useTimer } from "use-timer";
import { formatTime } from "./utils/formatTime";
import "./App.css";

const timerConfig = {
  initialTime: 10,
  timerType: "DECREMENTAL",
  endTime: 0
};

let completeCycles = 0;
let zeroCounter = 0;

let isPause = false;
let isTimerRunning = false;

let Start = 'Começar';

function App() {
  const { time, start, pause, reset } = useTimer(timerConfig);

  if(time === 0)
  zeroCounter++

  if(zeroCounter === 2){
    reset();
    start();
    zeroCounter = 0;
    completeCycles++;
  }

  const startStopTimer = () => {
    if(isTimerRunning) {
      isTimerRunning = false;
      Start = 'Começar';
      reset();
      return;
    }

    isTimerRunning = true;
    Start = 'Recomeçar';
    start();
  }

  const pauseTimer = () => {
    if(!isTimerRunning)
    return;

    if(isPause) {
      isPause = false;
      start();
      return;
    }

    pause();
    isPause = true;
  }


  return (
    <div className="app_container" align="center">
      <div>
        <h3>Hello, I'm Pomodoro!</h3>
        <h1>{formatTime(time)}</h1>
        <p>Cycles completed: {completeCycles}</p>
      </div>
      <button
        className="btn btn-outline-success"
        type="button"
        value="Start"
        onClick={start}
      >
        Start
      </button>
      <button
        className="btn btn-outline-danger"
        type="button"
        value={time}
        onClick={pause}
      >
        Pause
      </button>
      <button className="btn btn-outline-primary" type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
