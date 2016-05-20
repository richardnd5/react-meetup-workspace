import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterActions from './actions/counterActions';

const CounterApp = ({state, actions}) => (
  <div>
    <h1>Counter</h1>
    <h3>{state.value}</h3>
    <button onClick={() => actions.increment()}>Inc</button>
    <button onClick={() => actions.decrement()}>Dec</button>
  </div>
)

export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
}))(CounterApp);
