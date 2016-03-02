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
  handleCommentDelete: function(index) {

    var comments = this.state.comments;

    comments.splice(index, 1);

    this.setState({
      comments: comments
    })
  },
  handleCommentUpdate: function(index, comment) {

    console.log('handling update')

    var comments = this.state.comments;

    comments[index] = comment;

    console.log(comments)

    this.setState({
      comments: comments
    })
  },
  render: function() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList
          comments={this.state.comments}
          onCommentDelete={this.handleCommentDelete}
          onCommentUpdate={this.handleCommentUpdate}
        />
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
    var props = this.props;

    return (
      <div>
        {props.comments.map(function(comment, i) {
          return (
            <Comment
              key={i}
              name={comment.name}
              id={i}
              onDelete={props.onCommentDelete}
              onUpdate={props.onCommentUpdate}
              message={comment.message}
            />
          );
        })}
      </div>
    )
  }
});

var Comment = React.createClass({
  getInitialState: function() {
    return {
      commentEdit: '',
      isEditing: false
    }
  },
  handleDeleteBtnClick: function() {
    this.props.onDelete(this.props.id);
  },
  handleEditBtnClick: function() {
    this.setState({
      commentEdit: this.props.message,
      isEditing: true
    });
  },
  handleInputChange: function(e) {
    this.setState({
      commentEdit: e.target.value
    })
  },
  renderEditComment: function() {
    return (
      <form onSubmit={this.handleEditSubmit}>
        <input
          value={this.state.commentEdit}
          onChange={this.handleInputChange}
        />
      </form>
    )
  },
  handleEditSubmit: function(e) {
    e.preventDefault();

    var msg = this.state.commentEdit;

    if(!msg || !msg.trim()) {
      console.log('Edited comment must have a value.');
      return;
    }

    var newComment = {
      name: this.props.name,
      message: msg
    }

    this.props.onUpdate(this.props.id, newComment);

    this.setState({
      isEditing: false,
      commentEdit: ''
    })
  },
  renderComment: function() {
    return (
      <div>
        <p>{this.props.message}</p>
        <button onClick={this.handleEditBtnClick}>Edit</button>
        <button onClick={this.handleDeleteBtnClick}>Delete</button>
      </div>
    )
  },
  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.state.isEditing ? this.renderEditComment() : this.renderComment()}
      </div>
    );
  }
});



module.exports = App;
