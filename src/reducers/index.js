import { combineReducers } from 'redux';
import counter from '../modules/counter/reducers/counter';
import todo from '../modules/todo-app/reducers/todo';
import lyrics from '../modules/lyric-app/reducers/lyrics';

const rootReducer = combineReducers({
  counter,
  todo,
  lyrics
});

export default rootReducer;
