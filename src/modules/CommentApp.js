import React, { Component } from 'react';

class CommentApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []}
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {

    const { songs } = this.state;

    const newComments = songs.concat([comment]);

    this.setState({
      songs: newComments
    })
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList songs={this.state.songs}/>
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
      title: '',
      artist: '',
      lyrics: '',
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
            value={this.state.title}
            onChange={this.handleFieldChange}
            placeholder="Song Title"
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            value={this.state.artist}
            onChange={this.handleFieldChange}
            placeholder="Artist"
          />
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleFieldChange}
            placeholder="Lyrics"
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
        {this.props.songs.map((comment, i) =>
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
