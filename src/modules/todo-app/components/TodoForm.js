import React, { Component } from 'react';

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
          type="textArea"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          style= {{width: 200, height: 200 }}
        />
        <input
          type="submit"
        />
      </form>
    )
  }
}

export default TodoForm;
