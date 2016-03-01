var React = require('react');

var CommentForm = require('./CommentForm');
var CommentList = require('./CommentList');

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

module.exports = App;
