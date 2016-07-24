import * as types from '../actions/actionTypes';

const defaultState = {
  value: 0,
  startedAt: undefined,
  stoppedAt: undefined,
  baseTime: undefined
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

    case types.DOSOMETHING:
    return {
      value: state.value + 5
    }

    case "RESET_TIMER":
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };

    case "START_TIMER":
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };

    case "STOP_TIMER":
      return {
        ...state,
        stoppedAt: action.now
      }

    default:
      return state;

  }
}

export default counter;
