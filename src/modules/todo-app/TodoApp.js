import React, { Component }from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todoActions from './actions/todoActions';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const TodoApp = ({state, actions}) => (
  <div>
    <h1>Todos</h1>
    <TodoForm handleSubmit={actions.handleSubmit}/>
    <TodoList todos={state.todos} onTodoClick={actions.handleTodoClick}/>
    <p onClick={console.log('We Clicked The World!')}>Hello!</p>
  </div>
)

export default connect(state => ({
  state: state.todo
}),
(dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch)
}))(TodoApp);
