import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CommentApp from './modules/comments/CommentApp';
import TodoApp from './modules/TodoApp';
import CircleCentral from './modules/circles/CircleCentral';
import SolfegeApp from './modules/solfege/SolfegeApp';
import SolfegeHomePage from './modules/solfege/SolfegeHomePage';
import WordContainer from './modules/solfege/WordContainer';


export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="comment" component={CommentApp}/>
    <Route path="todo" component={TodoApp} />
    <Route path="circleCentral" component={CircleCentral} />
    <Route path="solfege" component={SolfegeApp} />
    <Route path="solfegeHomePage" component={SolfegeHomePage} />
    <Route path="wordContainer" component={WordContainer} />
  </Route>
)
