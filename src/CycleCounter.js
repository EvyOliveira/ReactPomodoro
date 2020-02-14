import React from "react";
//import { useState } from 'react';
import App from "./App";

function CycleCounter(props) {
  const step = props.step;
  if (step <= 4) {
    return <App />;
  }
  return <App />;
}

return (
  <React.Fragment>
    <div></div>
    <p>Contador: {CycleCounter}</p>
  </React.Fragment>
);
