var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
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
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.comments;

    var newComments = comments.concat([comment]);

    this.setState({
      comments: newComments
    })
  },
  handleCommentRemove: function(index) {

    var comments = this.state.comments;

    comments.splice(index, 1);

    this.setState({
      comments: comments
    })
  },
  render: function() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList comments={this.state.comments} onCommentDelete={this.handleCommentRemove}/>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      message: '',
      error: ''
    }
  },
  handleFieldChange: function(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var name = this.state.name;
    var message = this.state.message;

    if(!message.trim() || !name.trim()) {
      this.setState({
        error: 'You must enter a name and message'
      })
      return;
    }

    this.props.onCommentSubmit({
      name: name,
      message: message
    });

    this.setState({
      message: '',
      name: '',
      error: ''
    })
  },
  render: function() {
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
});

var CommentList = React.createClass({
  render: function() {
    var commentDelete = this.props.onCommentDelete;
    return (
      <div>
        {this.props.comments.map(function(comment, i) {
          return (
            <Comment name={comment.name} keyValue={i} handleDeleteComment={commentDelete}>
              {comment.message}
            </Comment>
          );
        })}
      </div>
    )
  }
});

var Comment = React.createClass({
  commentDelete: function() {
    this.props.handleDeleteComment(this.props.keyValue);
  },
  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>
          {this.props.children}
        </p>
        <button onClick={this.commentDelete}>
          Delete
        </button>
      </div>
    );
  }
});



module.exports = App;
