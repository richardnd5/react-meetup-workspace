import * as types from '../actions/actionTypes';

const defaultState = {
  value: 0
}

const counter = (state = defaultState, action = {}) => {
  switch(action.type) {

    case types.INCREMENT:
      return {
        value: state.value + 1
      }

    case types.DECREMENT:
      return {
        value: state.value - 1
      }

    default:
      return state;

  }
}

export default counter;
