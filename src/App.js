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

let btnStartStopLabel = "Start";

let isPause = false;
let isTimerRunning = false;

function App() {
  const { time, start, pause, reset } = useTimer(timerConfig);

  if (time === 0) zeroCounter++;

  if (zeroCounter === 2) {
    if (completeCycles === 4) {
      zeroCounter++;
      completeCycles = 0;
      reset();
      start();
    }
    reset();
    start();
    zeroCounter = 0;
    completeCycles++;
  }

  const startStopTimer = () => {
    if (isTimerRunning) {
      isTimerRunning = false;
      btnStartStopLabel = "Start";
      reset();
      return;
    }

    isTimerRunning = true;
    btnStartStopLabel = "Restart";
    start();
  };

  const pauseTimer = () => {
    if (!isTimerRunning) return;

    if (isPause) {
      isPause = false;
      start();
      return;
    }

    pause();
    isPause = true;
  };

  return (
    <body>
      <div className="app_container" align="center">
        <div>
          <img src="pomo.png" alt="logo pomodoro"></img>
          <h3>Hello, I'm Pomodoro!</h3>
          <strong>This cycle is {formatTime(time)} away!</strong>
          <h1>{formatTime(time)}</h1>
          <p>Cycles completed: {completeCycles}</p>
        </div>
        <button
          className="btn btn-outline-success"
          type="button"
          value="Start"
          onClick={startStopTimer}
        >
          {btnStartStopLabel}
        </button>
        <button
          className="btn btn-outline-danger"
          type="button"
          value={time}
          onClick={pauseTimer}
        >
          Pause
        </button>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </body>
  );
}

export default App;
