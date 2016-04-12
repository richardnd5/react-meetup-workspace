import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CommentApp from './modules/comments/CommentApp';
import TodoApp from './modules/TodoApp';
import SolfegeApp from './modules/solfege/SolfegeApp';


export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="comment" component={CommentApp}/>
    <Route path="todo" component={TodoApp} />
    <Route path="solfege" component={SolfegeApp} />
  </Route>
)
