import * as types from '../actions/actionTypes';

const defaultState = {
  value: 0
}

const counter = (state = defaultState, action = {}) => {
  switch(action.type) {

    case types.INCREMENT:
      return {value: state.value + 1}

    case types.DECREMENT:
      return {value: state.value - 1}

    case types.ADDFIVE:
      return {value: state.value + 5}

    case types.MINUSFIVE:
      return {value: state.value - 5}

    case types.MINUSTWO:
      return {value: state.value - 2}

    case types.ADDTWO:
      return {value: state.value + 2}

    case types.RESET:
      return {value: state.value = 0}

    default: return state;}}

export default counter;
