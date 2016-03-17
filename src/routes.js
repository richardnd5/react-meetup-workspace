import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CommentApp from './modules/CommentApp';
import TodoApp from './modules/TodoApp';
import myPage from './modules/myPage';
import LifeCounter from './modules/LifeCounter';



export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="comment" component={CommentApp}/>
    <Route path="todo" component={TodoApp} />
    <Route path="mypage" component={myPage} />
    <Route path="lifecounter" component={LifeCounter} />
  </Route>
)
