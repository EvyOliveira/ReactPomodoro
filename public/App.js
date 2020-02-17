import React from 'react';
import './App.css';
import { useTimer } from 'use-timer';
import { FormatTime } from '../src/utils/formatTime';

const timerConfig = {
  initialTime: 10,
  endTime: 0,
  timerType: 'DECREMENTAL'
}

let completCycles = 0;
let isPause = false;
let isTimerRunning = false;
let btnStartStopLabel = 'Começar';
let zerosCounter = 0;

function App() {
  const { time, start, pause, reset } = useTimer(timerConfig);

  if(time === 0)
    zerosCounter++

  if(zerosCounter === 2){
    reset();
    start();
    zerosCounter = 0;
    completCycles++;
  }

  const startStopTimer = () => {
    if(isTimerRunning){
      isTimerRunning = false;
      btnStartStopLabel = 'Começar';
      reset();
      return;
    }

    isTimerRunning = true;
    btnStartStopLabel = 'Recomeçar';
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
    <div className="App">
      <header className="App-header">
        <h3>Pomodoro!</h3>
      <div>
        <button onClick={startStopTimer}>{btnStartStopLabel}</button>
        <button onClick={pauseTimer}>Pausar/Continuar</button>
      </div>
      <p>{ FormatTime(time) }</p>
      <h4>Ciclos completos: {completCycles}</h4>
      </header>
    </div>
  );
}

export default App;
