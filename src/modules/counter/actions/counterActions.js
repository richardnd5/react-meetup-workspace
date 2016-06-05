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

export function addFive() {
  return {
    type: types.ADDFIVE
  }
}

export function minusFive() {
  return {
    type: types.MINUSFIVE
  }
}

export function minusTwo() {
  return {
    type: types.MINUSTWO
  }
}

export function addTwo() {
  return {
    type: types.ADDTWO
  }
}

export function reset() {
  return {
    type: types.RESET
  }
}
