import * as types from './actionTypes';

export function startTimer() {
  return {
    type: "STARTTIMER",
    baseTime: baseTime,
    now: new Date().getTime()
  }
}

export function stopTimer() {
  return {
    type: "STOPTIMER",
    now: new Date().getTime()
  }
}

export function resetTimer() {
  return {
    type: "RESETTIMER",
    now: new Date().getTime()
  }
}
