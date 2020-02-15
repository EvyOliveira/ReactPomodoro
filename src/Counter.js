import React from "react";
import { useTimer } from "use-timer";
import { formatTime } from "./utils/formatTime";

function Counter() {
  const { time, start, pause, reset, step } = useTimer({
    initialTime: 1500,
    timerType: "DECREMENTAL",
    endTime: 0
  });

  return (
    <React.Fragment>
      <div>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
        <p>Elapsed time: {formatTime(time)}</p>
        <p>Cycles: {step}</p>
      </div>
    </React.Fragment>
  );
}

export default Counter;
