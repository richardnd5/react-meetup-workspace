import React, { Component } from 'react';

export default class InputSolfegeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      error: ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, message } = this.state;

    if(!message.trim() || !name.trim()) {
      this.setState({
        error: 'You have to fill in all fields!'
      })
      return;
    }

    this.props.onCommentSubmit({
      name,
      message
    });

    this.setState({
      message: '',
      name: '',
      error: ''
    })
  }
  render() {
    return (
      <div style={{
        border: 'solid black 1px',
        margin: 3,
        textAlign: 'center',
        width: '50%'
}}>
      <form onSubmit={this.handleSubmit}>
        {this.state.error}
        <div style={{margin: 5}}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleFieldChange}
            placeholder="Title"
          />
        </div>
        <div style={{margin: 5}}>
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleFieldChange}
            placeholder="Artist Name"
          />
        </div>
        <div style={{margin: 5}}>
          <input
            type="textarea"
            name="lyrics"
            value={this.state.lyrics}
            onChange={this.handleFieldChange}
            placeholder="Type Lyrics Here!"
            style={{
              width: '70%',
              height: 50
            }}
          />
        </div>
        <div style={{margin: 5}}>
          <input type="submit" value="Submit Lyrics" />
        </div>

      </form>
      </div>
    )
  }
}
