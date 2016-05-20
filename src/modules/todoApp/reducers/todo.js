import * as types from '../actions/actionTypes';

const defaultState = {
  todos: []
}

const todo = (state = defaultState, action = {}) => {
  switch(action.type) {

    case types.SUBMIT:
      return {
        return {
          todos: [
          ...state.todos,
          action.todo
        ]}
      }

    case types.TOGGLE_COMPLETE: {

          let newTodos = state.todos;

          newTodos[action.todoId].completed =
          !newTodos[action.todoId].completed;

          return{
            todos: newTodos
          };
    }

    default:
      return state;

  }
}

export default todo;
