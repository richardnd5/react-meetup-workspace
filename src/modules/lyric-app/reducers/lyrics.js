import * as types from '../actions/actionTypes';

const defaultState = {
  title: '',
  artist: '',
  lyrics: ''
}

const lyrics = (state = defaultState, action = {}) => {
  switch(action.type) {

    case types.SUBMIT:
      return {

      }

    default:
      return state;

  }
}

export default lyrics;
