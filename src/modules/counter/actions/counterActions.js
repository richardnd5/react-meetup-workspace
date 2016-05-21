import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}

export function doSomething() {
  return {
    type: types.DOSOMETHING
  }
}
