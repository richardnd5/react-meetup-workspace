import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CommentApp from './modules/comments/CommentApp';
import TodoApp from './modules/TodoApp';
import CounterApp from './modules/Counter';
import TimerApp from './modules/TimerApp';


export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="comment" component={CommentApp}/>
    <Route path="todo" component={TodoApp} />
    <Route path="counter" component={CounterApp} />
    <Route path="timer" component={TimerApp} />
  </Route>
)
