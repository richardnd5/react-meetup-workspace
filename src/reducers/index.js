import { combineReducers } from 'redux';
import counter from '../modules/counter/reducers/counter';
import todo from '../modules/todoApp/reducers/todo';

const rootReducer = combineReducers({
  counter,
  todo
});

export default rootReducer;
