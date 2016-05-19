import { combineReducers } from 'redux';
import counter from '../modules/counter/reducers/counter';
import todo from '../modules/todo-app/reducers/todo';

const rootReducer = combineReducers({
  counter,
  todo
});

export default rootReducer;
