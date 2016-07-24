import React, {Component, Image} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterActions from '../actions/counterActions';

const CounterApp = ({state, actions}) => (
  <div style={{textAlign: 'center'}}>
    <Image source={require('./trebleStaff.jpg')}/>
    <div onClick={() => actions.increment()} style={{ background: ' #ff4000', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>Do'</div>
    <div onClick={() => actions.increment()} style={{ background: '#ff66b3', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>Ti</div>
    <div onClick={() => actions.increment()} style={{ background: '#a300cc', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>La</div>
    <div onClick={() => actions.increment()} style={{ background: '#0066ff', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>So</div>
    <div onClick={() => actions.increment()} style={{ background: '#33cc33', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>Fa</div>
    <div onClick={() => actions.increment()} style={{ background: '#e6e600', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>Mi</div>
    <div onClick={() => actions.increment()} style={{ background: '#ff8000', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>Re</div>
    <div onClick={() => actions.increment()} style={{ background: '#ff4000', margin: 'auto', padding: 2, marginTop: 4,  width: 100, textAlign: 'center', cursor: 'pointer'
    }}>Do</div>
    <h3 style= {{background: '#22CC44'}}>{state.value}</h3>
  </div>
)

export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
}))(CounterApp);
