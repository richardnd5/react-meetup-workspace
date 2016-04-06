import React, { Component } from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default class CommentApp extends Component {

  constructor(props) {
    super(props);
    this.state = {comments: [
      {
        name: 'Pete Hunt',
        message: 'this is one comment'
      },
      {
        name: 'Jordan Walke',
        message: 'this is another comment'
      }
    ]}
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {

    const { comments } = this.state;

    const newComments = comments.concat([comment]);

    this.setState({
      comments: newComments
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
