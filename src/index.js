import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import routes from './routes';
import * as reducers from './reducers';

console.log(reducers)

const reducer = combineReducers(reducers);
const store = createStore(reducer);
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);
