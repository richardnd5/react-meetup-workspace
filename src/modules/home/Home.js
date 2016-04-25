import React, { Component } from 'react';
import SignupForm from './SignupForm';
import LogInForm from './LogInForm';
import InputSolfegeForm from './InputSolfegeForm.js';


export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      lyricData: []
    }

    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
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

  handleSignUpSubmit(lyrics) {

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

  handleLogInSubmit(lyrics) {

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
      <h1>Welcome To The Solfege Site Baby!</h1>
      <InputSolfegeForm />
    </div>
  )
}
}
