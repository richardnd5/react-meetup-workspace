import React, { Component } from 'react';

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(input) {
    this.setState({
      todos: [
        ...this.state.todos,
        input
      ]
    });
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoForm handleSubmit={this.handleSubmit}/>
        <TodoList todos={this.state.todos}/>
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
    this.props.handleSubmit({text: this.state.text});
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

// Do the toggle thingy (down below). Turn these babies to stateless.

const TodoList = ({ todos }) => (
  <div>
  {todos.map((todo, i) => {
    return (
      <Todo text={todo.text} key={i} />
    )
  })}
  </div>

)

// class TodoList extends Component {
//   render() {
//     return (
//       <div>
//       {this.props.todos.map( (todo, i) => {
//         return (
//           <Todo text={todo.text} key={i} />
//         )
//       })}
//       </div>
//     )
//   }
// }

class Todo extends Component {

  toggleFinish() {


  }

  render() {
    return (
      <div style={{
      backgroundColor:'#8888BE',
      textDecoration:'line-through'
    }} onClick={this.props.toggleFinish}>
        {this.props.text}
      </div>
    )
  }
}

export default TodoApp;
