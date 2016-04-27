import React, {Component} from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrement() {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    return(
      <div>
        <h1>Counter</h1>
        <h3>{this.state.value}</h3>
        <button onClick={() => this.increment()}>Inc</button>
        <button onClick={() => this.decrement()}>Dec</button>
      </div>
    )
  }
}

export default CounterApp;
