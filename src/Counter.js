import React from "react";
import { useTimer } from "use-timer";
import { useState } from "react";

import { formatTime } from "./utils/formatTime";

function Counter() {
  const [count, setCount] = useState(0);

  const { time, start, pause, reset } = useTimer({
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
        <p onClick={() => setCount(count + 1)}>Cycles completed:</p>
      </div>
    </React.Fragment>
  );
}

export default Counter;
