import React, { Component } from 'react';

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  handleSubmit(todo) {

    this.setState({
      todos: [
        ...this.state.todos,
        todo
      ]
    });
  }

  handleTodoClick(todoId) {

    let newTodos = this.state.todos;

    newTodos[todoId].completed = !newTodos[todoId].completed;

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoForm handleSubmit={this.handleSubmit}/>
        <TodoList todos={this.state.todos} onTodoClick={this.handleTodoClick}/>
      </div>
    )
  }
}

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      text: this.state.text,
      completed: false
    });
    this.setState({
      text: ''
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input
          type="submit"
        />
      </form>
    )
  }
}

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

class Todo extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div onClick={this.handleClick} style={
        {textDecoration: this.props.completed ? 'line-through' : 'none'}}>
        {this.props.text}
      </div>
    )
  }
}

export default TodoApp;
