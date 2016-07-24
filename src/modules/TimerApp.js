import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as timerActions from '../actions/timerActions';


class TimerApp extends Component {

    constructor(props) {
      super(props);
      this.state = {
      }

    }

    render() {
      return (
        <div>asdflkj
        <TheTimer updateInterval={33} />
        <TheTimer updateInterval={1000} />
        <button onClick={() => actions.increment()}>Inc</button>
        </div>
      )
    }
  }

  function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }



export const Timer = ({ start, stop, reset, state }) =>
class TheTimer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount() {
  this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval);
  }

  componentWillUnmount() {
  clearInterval(this.interval);
  }

  render() {

const { baseTime, startedAt, stoppedAt } = this.props;
 const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

 return (
   <div>
     <div>Time: {elapsed}</div>
     <div>
       {/*<button onClick={() => this.props.startTimer(elapsed)}>Start</button>
       <button onClick={() => this.props.stopTimer()}>Stop</button>
       <button onClick={() => this.props.resetTimer()}>Reset</button>*/}

       <button onClick={() => this.actions.startTimer(elapsed)}>Start</button>
       <button onClick={() => state.actions.stopTimer()}>Stop</button>
       <button onClick={() => state.actions.resetTimer()}>Reset</button>
     </div>
   </div>
 );
      <div>
      </div>
  } }

export default connect(state => ({
  state: state.timer
}),
(dispatch) => ({
  actions: bindActionCreators(timerActions, dispatch)
}))(TimerApp);
