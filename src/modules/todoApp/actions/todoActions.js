import * as types from './actionTypes';

export function submit(todo) {
  return {
    type: types.SUBMIT,
    todo: todo
  }
}

export function toggleComplete(todoId) {
  return {
    type: types.TOGGLE_COMPLETE,
    todoId: todoId
  }
}
