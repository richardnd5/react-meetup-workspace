import React, { Component } from 'react';

class CommentApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [
      ]
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  componentDidMount() {
    // Fetch data
    this.fetchComments()
  }

  fetchComments() {
    fetch('http://localhost:3001/comments')
      .then((res) => res.json())
      .then((comments) => {
        this.setState({
          comments
        })
      })
  }

  handleCommentSubmit(comment) {
    fetch('http://localhost:3001/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    }).then((res) => res.json())
    .then((comments) => {
      this.setState({
        comments
      })
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
    return (
      <div>
        {this.props.comments.map((comment, i) =>
          <Comment name={comment.name} key={i}>
            {comment.message}
          </Comment>
        )}
      </div>
    )
  }
}

const Comment = ({name, children}) => (
  <div>
    <h3>{name}</h3>
    <p>
      {children}
    </p>
  </div>
)


export default CommentApp;
