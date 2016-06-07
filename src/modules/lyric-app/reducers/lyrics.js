import * as types from '../actions/actionTypes';

const defaultState = {
  todos: []
}

const todo = (state = defaultState, action = {}) => {
  switch(action.type) {

    case types.SUBMIT:
      return {
        todos: [
          ...state.todos,
          action.todo
        ]
      }

    default:
      return state;

  }
}

export default todo;
