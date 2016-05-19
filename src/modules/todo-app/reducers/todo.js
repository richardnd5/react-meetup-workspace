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

    case types.TODO_CLICK: {
      let newTodos = state.todos;

      newTodos[action.todoId].completed = !newTodos[action.todoId].completed;

      return {
        todos: newTodos
      };
    }

    default:
      return state;

  }
}

export default todo;
