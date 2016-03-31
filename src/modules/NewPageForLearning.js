import React, { Component } from 'react';


class NewPageForLearning extends Component {

  constructor(props) {
    super(props);
      let todos = []

      for(let i = 1; i <= 200; i++ ) {
        todos.push({msg: i})
      }
      this.state = {
        todos
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
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

  handleStartClick() {

  // console.log('CLICKED IT NIPS!');
    this.addCircles();

  // this.timer = setInterval({this.count}, 50);

  }

  handleStopClick() {

    console.log('lkj')

  }

  render() {
    return (
      <div>

        <h1 style={{
          // position: 'absolute',
          textAlign: 'center'

        }}>Title</h1>
        <TodoForm handleSubmit={this.handleSubmit}/>
        <button onClick ={this.count}>StArt</button>
        <button onClick ={this.count}>StOp</button>
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          hidden= "true"
        />
        <input type="submit" style= {{textAlign: 'center'}}/>
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
              className="todo"

            />
          )
        })}
      </div>
    )
  }
}

// Styling. Down below is the merging for dynamic styling.
const styles = {
  todo: {
    textAlign: 'center',
    width: 40,
    height: 40,
    float: 'left',
    margin: 2,
    marginTop: 20,
    borderRadius: '50%',
    color: '#EEEE44',
    position:'relative'
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
          backgroundColor: this.props.completed ? '#3344CC' : '#44AAEE'}}>
        {this.props.text}
      </div>
    )
  }
}

class LoopApp extends Component {

  constructor(props) {
    super(props);
    let comments = [];
    for(let i = 1; i <= 20; i++ ) {
      comments.push({msg: i})
    }
    this.state = {
      comments
    }

  }

  render() {
    return (
      <div
        style= {{
          backgroundColor: '#3388EE',
          borderRadius: '5%',
          width: '60%'
        }}
      >

        {
          this.state.comments.map((comment, i) => (

              <div
              style= {{

                display: 'inline-block',
                verticalAlign: 'middle',
                lineHeight: 'normal',
                backgroundColor: '#92DD00',
                margin: 2,
                borderRadius: '5%',
                fontSize: 20,
                textAlign: 'center',
                padding: 20,
                width: 20,
                height: 20,
                border: '3px solid #73AD21'

                  }}>
                {comment.msg}
              </div>


          ))
        }
      </div>
    )
  }
}

export default NewPageForLearning;
