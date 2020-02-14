import React from 'react';
import { useTimer } from 'use-timer';
//import CycleCounter from './CycleCounter';

function Counter() {

    const { time, start, pause, reset, step } = useTimer({
        initialTime: 2500,
        timerType: 'DECREMENTAL',
        step: 0,
});

    return (
        <React.Fragment>
        <div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
            <p>Elapsed time: {time}</p>
            <p onChange={this.CycleListener}>Cycles: value={step}</p>
        </div>
            </React.Fragment>
    );
};

export default Counter;

