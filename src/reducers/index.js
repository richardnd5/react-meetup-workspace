import { combineReducers } from 'redux';
import counter from '../modules/reducers/counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
