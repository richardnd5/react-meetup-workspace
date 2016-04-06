import React, { Component } from 'react';

import Comment from './Comment';

export default class CommentList extends Component {
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
