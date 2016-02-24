import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          name: 'Pete Hunt',
          message: 'this is one comment'
        },
        {
          name: 'Jordan Walke',
          message: 'this is another comment'
        }
      ]
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    let {comments} = this.state;
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    })
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

class CommentForm extends Component {

  constructor(props) {
    super();

    this.state = {
      name: '',
      message: '',
      error: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const {name, message} = this.state;

    if(!message.trim() || !name.trim()) {
      this.setState({
        error: 'You must enter a name and message'
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
      <form onSubmit={this.handleSubmit}>
        {this.state.error}
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleFieldChange}
            placeholder="Your name"
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleFieldChange}
            placeholder="Say something"
          />
        </div>
        <div>
          <input type="submit" value="Post" />
        </div>

      </form>
    )
  }
}

class CommentList extends Component {

  render() {

    const {comments} = this.props;

    let commentNodes = comments.map((comment, i) => {
      return(
        <Comment name={comment.name} key={i}>
          {comment.message}
        </Comment>
      )
    });

    return (
      <div>
        {commentNodes}
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.name}</h3>
        <p>
          {this.props.children}
        </p>
      </div>
    )
  }
}
