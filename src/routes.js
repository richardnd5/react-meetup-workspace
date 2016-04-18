import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/home/Home';
import SolfegeApp from './modules/solfege/SolfegeApp';


export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="solfege" component={SolfegeApp} />
  </Route>
)
