import * as types from '../actions/actionTypes';

const defaultState = {
  startedAt: undefined,
  stoppedAt: undefined,
  baseTime: undefined
}

const timer = (state = defaultState, action = {}) => {
  switch(action.type) {

    case types.STARTTIMER:
      return {
        // ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      }

    case types.STOPTIMER:
      return {
        // ...state,
        stoppedAt: action.now
      }

    case types.RESETTIMER:
      return {
        // ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      }

    default:
      return state;

  }
}

export default timer;
