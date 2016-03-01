var React = require('react');

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

module.exports = Comment;
