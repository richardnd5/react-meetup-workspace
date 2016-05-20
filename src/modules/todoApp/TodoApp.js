import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from './actions/todoActions';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class TodoApp extends Component {

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoForm handleSubmit={this.props.actions.submit}/>
        <TodoList todos={this.props.state.todos}
        onTodoClick={this.props.actions.toggleComplete}/>
      </div>
    )
  }
}

export default connect(state => ({
  state: state.todo
}),
(dispatch) =>({
  actions:bindActionCreators(todoActions, dispatch)
}))(TodoApp);
