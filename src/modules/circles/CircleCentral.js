import React, { Component } from 'react';


class CircleCentral extends Component {

  constructor(props) {
    super(props);
      let todos = []

      for(let i = 1; i <= 7; i++ ) {
        todos.push({msg: i})
      }
      this.state = {
        todos
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.addCircles = this.addCircles.bind(this);

  }

  addCircles() {

    this.setState({
      todos: [
        ...this.state.todos,
        {text: ''}
      ]
    });
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

    this.setState({todos: newTodos}); }

  render() {
    return (
      <div style={{background: "linear-gradient(down, red, yellow)"}}>

        <h1 style={{
          // position: 'absolute',
          textAlign: 'center'

        }}>Circle Central!</h1>
        <TodoForm handleSubmit={this.handleSubmit}/>
        <TodoList
          todos={this.state.todos}
          onTodoClick= {this.handleTodoClick}
          />
          {/*<LoopApp />*/}



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
      <div onClick={this.handleSubmit} style= {{
        background: '#AAAADD',
        width: 70,
        textAlign: 'center',
        borderRadius: '15%',
        fontSize: 12,
        color: '#2222EE'}}>
      Click Here to Add a Cicle!
      </div>
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
              className="todo"

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
    console.log('so WHAT')

  }


  render() {
    return (
      <div
      onClick={this.handleClick}
      style={{
          textAlign: 'center',
          width: 40,
          height: 40,
          float: 'left',
          margin: 2,
          marginTop: 20,
          borderRadius: '50%',
          color: '#EEEE44',
          position:'relative',
          backgroundColor: this.props.completed ? '#3EE4CC' : '#4EEDEE'}}>
        {this.props.text}
      </div>
    )
  }
}

export default CircleCentral;
