import { useState, React } from "react";

function CounterCycle() {
  const [count, setCount] = useState(0);

  if (count === 4) {
    return (document.title = `You've completed ${setCount} Pomodoro cycle(s)!`);
  }
  

  return (
    <React.Fragment>
      <div>
        <p onClick={() => setCount(count + 1)}>Cycles completed:</p>
      </div>
    </React.Fragment>
  );
}

export default CounterCycle;
