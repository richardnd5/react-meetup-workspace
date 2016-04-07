import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CommentApp from './modules/CommentApp';
import TodoApp from './modules/TodoApp';


export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="comment" component={CommentApp}/>
    <Route path="todo" component={TodoApp} />
  </Route>
)
