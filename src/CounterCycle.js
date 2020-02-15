import { useState } from "react";

function CounterCycle() {
    
  const [count, setCount] = useState(0);

  if (count === 4) {
    return document.title = `You've completed ${setCount} Pomodoro cycle(s)!`;
    };
  }

  export default CounterCycle;