var React = require('react');
var Comment = require('./Comment');

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

module.exports = CommentList;
