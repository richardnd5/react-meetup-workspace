import React, { Component } from 'react';

class MyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {text: 'GOD'}, {text: ''}, {text: ''}, {text: ''},
        {text: ''}, {text: ''}, {text: ''}, {text: ''},
        {text: ''}, {text: ''}, {text: ''}, {text: ''},
        {text: ''}, {text: ''}, {text: ''}, {text: ''},
        {text: ''}, {text: ''}, {text: ''}, {text: ''},
        {text: ''}, {text: ''}, {text: ''}, {text: ''},
        {text: ''}, {text: ''}, {text: ''}, {text: ''},
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.count = this.count.bind(this);

  }

  handleSubmit(todo) {
    console.log('run');
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

count() {
  console.log('lkj')

}

handleStartClick(){

  console.log('CLICKED IT NIPS!');



  // this.timer = setInterval({this.count}, 50);



}

  render() {
    return (
      <div>

        <h1 style={{textAlign: 'center'}}>Bubble Rhythm</h1>
        <TodoForm handleSubmit={this.handleSubmit}/>
        <button onClick ={this.handleStartClick}>StArt</button>
        <TodoList
          todos={this.state.todos}
          onTodoClick= {this.handleTodoClick}
          />



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
          hidden= "true"
        />
        <input type="submit" />
      </form>
    )
  }
}

// Do the toggle thingy (down below). Turn these babies to stateless.

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

  }

  render() {
    return (
      <div
      onClick={this.handleClick}
      style={
        {textDecoration: this.props.completed ? 'line-through' : 'none',
         backgroundColor: this.props.completed ? '#3344CC' : '#44AAEE',
          textAlign: 'center',
          width: 40,
          height: 40,
          float: 'left',
          margin: 2,
          marginTop: 20,
          borderRadius: '50%',
          color: '#EEEE44',
          position:'relative'
    }}>
        {this.props.text}
      </div>
    )
  }
}

export default MyPage;
