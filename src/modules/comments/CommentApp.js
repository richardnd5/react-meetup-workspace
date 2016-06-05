import React, { Component } from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default class CommentApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      comments: []
    }

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    // mock slower API request to show loading state
    setTimeout(this.fetchComments, 2000);
  }

  fetchComments() {
    fetch('http://localhost:3001/comments')
      .then((res) => res.json())
      .then((comments) => {
        this.setState({
          isLoading: false,
          comments
        });
      });
  }

  handleCommentSubmit(comment) {

    fetch('http://localhost:3001/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    }).then((res) => res.json())
    .then((res) => {
      this.setState({
        comments: res
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        {this.state.isLoading ? 'Loading...' :
          <CommentList comments={this.state.comments}/>
        }
      </div>
    );
  }
}
