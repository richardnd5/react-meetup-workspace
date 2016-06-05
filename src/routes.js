import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CounterApp from './modules/counter/Counter';
import CircleCentral from './modules/circles/CircleCentral';


export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="counter" component={CounterApp} />
    <Route path="circleCentral" component={CircleCentral} />
  </Route>
)
