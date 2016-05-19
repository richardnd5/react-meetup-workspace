import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map( (todo, i) => {
          return (
            <Todo
              text={todo.text}
              key={i}
              onClick={this.props.onTodoClick}
              id={i}
              completed={todo.completed}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList;
