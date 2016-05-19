import * as types from './actionTypes';

export function handleSubmit(todo){
  return {
    type: types.SUBMIT,
    todo: todo
  }
}

export default function handleTodoClick(todoId) {
  return {
    type: types.TODO_CLICK,
    todoId: todoId
  }
}
