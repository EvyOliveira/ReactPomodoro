import React, { Component } from 'react';
//import { useState } from 'react';
import Counter from "./Counter";
import App from "./App";

class History extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      elapsedTime: '',
      cycles: '',
      breakTime: '',
      extraBreak: '',
    }

    this.state = this.initialState;
  }

  cycleListener = () => {
    this.props.pauseButton(this.state);
    this.setState(this.stateInicial);

}

pauseButton = event => {
  const { elapsedTime, cycles, breakTime, extraBreak, value} = event.target;

  this.setState({
      [elapsedTime]: value,
      [cycles]: value,
      [breakTime]: value,
      [extraBreak]: value

  });
}

render () {
  const { elapsedTime, cycles, value, breakTime, extraBreak } = this.state;
  
  return (
  <div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={this.pauseButton}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
            <p>Elapsed time: {this.elapsedTime}</p>
            <p onChange={this.CycleListener} type = "button">Cycles:</p>
        </div>
        );
};


}

export default History;
