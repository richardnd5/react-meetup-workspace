import React from 'react';
import Circle from './components/circle'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterActions from './actions/counterActions';

const CounterApp = ({state, actions}) => (

  <div>
    <h1 style={{textAlign: 'center'}}>Counter</h1>
    <h3 style={{textAlign: 'center', fontSize: 40}}>{state.value}</h3>
    <div style={{textAlign: 'center', background: 'yellow', paddingLeft: '10%'}}>
    <div style={{
        background: '#4455EE',
        width: 30,
        textAlign: 'center',
        float: 'left',
        padding: 20,
        margin: 20,
        fontSize: 15,
        borderRadius: '20%',
        cursor: 'pointer'
      }}
           onClick={() => actions.minusFive()}>-5</div>
    <div style={{
        background: '#4455EE',
        width: 30,
        textAlign: 'center',
        float: 'left',
        padding: 20,
        margin: 20,
        fontSize: 15,
        borderRadius: '20%',
        cursor: 'pointer'
      }}
           onClick={() => actions.minusTwo()}>-2</div>
    <div style={{
        background: '#4455EE',
        width: 30,
        textAlign: 'center',
        float: 'left',
        padding: 20,
        margin: 20,
        fontSize: 15,
        borderRadius: '20%',
        cursor: 'pointer'
      }}
           onClick={() => actions.decrement()}>-1</div>
    <div style={{
        background: '#4455EE',
        width: 30,
        textAlign: 'center',
        float: 'left',
        padding: 20,
        margin: 20,
        fontSize: 15,
        borderRadius: '20%',
        cursor: 'pointer'
      }}
           onClick={() => actions.reset()}>( 0 )</div>
    <div style={{
        background: '#4455EE',
        width: 30,
        textAlign: 'center',
        float: 'left',
        padding: 20,
        margin: 20,
        fontSize: 15,
        borderRadius: '20%',
        cursor: 'pointer'
      }}
           onClick={() => actions.increment()}>1</div>
    <div style={{
        background: '#4455EE',
        width: 30,
        textAlign: 'center',
        float: 'left',
        padding: 20,
        margin: 20,
        fontSize: 15,
        borderRadius: '20%',
        cursor: 'pointer'
      }}
           onClick={() => actions.addTwo()}>2</div>
    <div style={{
        background: '#4455EE',
        width: 30,
        textAlign: 'center',
        float: 'left',
        padding: 20,
        margin: 20,
        fontSize: 15,
        borderRadius: '20%',
        cursor: 'pointer'
      }}
           onClick={() => actions.addFive()}>5</div>
    {/*<Circle/>*/}

  </div>
  {/*Add another div here.*/}

    </div>
)

export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
}))(CounterApp);
