import React, { Component } from 'react';

export default class LogInForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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

    const { username, password } = this.state;

    if(!password.trim() || !username.trim()) {
      this.setState({
        error: 'You have to fill in all fields!'
      })
      return;
    }

    this.props.onCommentSubmit({
      username,
      password,
    });

    this.setState({
      password: '',
      username: '',
      error: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.error}
          <div>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleFieldChange}
              placeholder="username"
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleFieldChange}
              placeholder="password"
            />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>

        </form>
      </div>
    )
  }
}
