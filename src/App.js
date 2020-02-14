import React from 'react';
import { useTimer } from 'use-timer';
//import CycleCounter from './CycleCounter';

function App() {

    const { time, start, pause, reset } = useTimer({
        initialTime: 2500,
        timerType: 'DECREMENTAL',
        step: 1, 
});

    return (
        <React.Fragment>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
            <p>Elapsed time: {time}</p>
        </React.Fragment>
    );
};

export default App;

