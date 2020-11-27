import React, { Component } from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [0,0,0],
      selected: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Selected Counter :  {this.state.selected + 1}</h1>
        
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <br></br>
        <br></br>
        {this.state.counters.map((counter,index) => {
          return <div onClick={this.selectCounter(index)}>{counter}</div>

        })}
      </div>
    );
  }
  // currying
  selectCounter = (index) => () => {
    this.setState({selected: index})
  } 

  increment = () => {
    const {counters, selected} = this.state
    counters[selected] = counters[selected] + 1

    this.setState({ 
      counters
    });
  }

  decrement = () => {
    const {counters, selected} = this.state
    counters[selected] = counters[selected] - 1

    this.setState({ 
      counters
    });
  }

  reset = () => {
    const {counters, selected} = this.state
    counters[selected] = 0

    this.setState({ 
      counters
    });
  }


}


class App extends Component {
  
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;

