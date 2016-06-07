import * as types from './actionTypes';

export function handleSubmit(todo){
  return {
    type: types.SUBMIT,
  }
}
