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
  render: function() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList comments={this.state.comments}/>
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
    return (
      <div>
        {this.props.comments.map(function(comment, i) {
          return (
            <Comment name={comment.name} key={i}>
              {comment.message}
            </Comment>
          );
        })}
      </div>
    )
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
});



module.exports = App;
