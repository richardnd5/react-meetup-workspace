var React = require('react');

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

module.exports = CommentForm;
