import React, { Component } from 'react';
import InputSolfegeForm from './InputSolfegeForm';

export default class SolfegeHomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      lyricData: []
    }

    this.handleLyricSubmit = this.handleLyricSubmit.bind(this);
    this.fetchLyrics = this.fetchLyrics.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    // mock slower API request to show loading state
    setTimeout(this.fetchLyrics, 2000);
  }

  fetchLyrics() {
    fetch('http://localhost:3001/lyricData')
      .then((res) => res.json())
      .then((lyricData) => {
        this.setState({
          isLoading: false,
          lyricData
        });
      });
  }

  handleLyricSubmit(lyrics) {

    fetch('http://localhost:3001/lyricData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(lyrics)
    }).then((res) => res.json())
    .then((res) => {
      this.setState({
        lyricData: res
      })
    })
  }

  render() {


  return (
    <div>
      <h1>Welcome</h1>
      <InputSolfegeForm onCommentSubmit={this.handleLyricSubmit}/>
    </div>
  )
}
}
