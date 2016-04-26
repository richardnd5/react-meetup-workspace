import React, { Component } from 'react';
import SolfegeButton from './SolfegeButton'
import WordContainer from './WordContainer'
import InputForm from './inputForm'
import TodoApp from './Todo'
// import LyricsContainer from './lyricsContainer'

export default class SolfegeApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      artist: '',
      wordContainers: [],
    };

    this.handleLyricsSubmit = this.handleLyricsSubmit.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);
    this.handleSolfegeClick = this.handleSolfegeClick.bind(this);
  }

  handleLyricsSubmit(song) {
    // var lyricsNoBreaks = wordContainer.lyrics.replace(/\n/g, " [br] ");
    // //create an array with each lyric word as an element
    var wordArray = song.lyrics.split(' ');
    var wordContainerArray = [];

    wordArray.map( (word, i) => {
      wordContainerArray.push({
        solfege: [],
        text: word,
        selected: false,
      })
    })

    this.setState({
      title: song.title,
      artist: song.artist,
      wordContainers: wordContainerArray
    })

  }

  handleWordClick(wordId) {

    let newArrayOfWordContainers = this.state.wordContainers;
    console.log(this.state.wordContainers)


    newArrayOfWordContainers.map( (wordContainer) => {
      wordContainer.selected = false
    })

    newArrayOfWordContainers[wordId].selected = !newArrayOfWordContainers[wordId].selected;

    this.setState({
      wordContainers: newArrayOfWordContainers
    });
  }

  handleSolfegeClick(theText, theColor) {

    this.state.wordContainers.map( (wordContainer) => {
      if (wordContainer.selected) {
        wordContainer.solfege.push({
          text: theText,
          color: theColor
        })
      }
    })

    this.setState({
        wordContainers: this.state.wordContainers
    })
  }

  render(){
    return(
    <div>

      <h1>Solfege Your Lyrics honey</h1>

      <div>
        <SolfegeButton text='Do' color='#ff0000' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='Re' color='#ff751a' onClick={this.handleSolfegeClick}/>
        <SolfegeButton text='Mi' color='#ffff00' onClick={this.handleSolfegeClick}/>
        <SolfegeButton text='Fa' color='#47d147' onClick={this.handleSolfegeClick}/>
        <SolfegeButton text='So' color='#2d864d' onClick={this.handleSolfegeClick}/>
        <SolfegeButton text='La' color='#4477DD' onClick={this.handleSolfegeClick}/>
        <SolfegeButton text='Ti' color='#cc0099' onClick={this.handleSolfegeClick}/>
      </div>

      <div>
        <div style={{
          marginTop: '40'
          }}>
          <p style={{margin: 5}}><b>{this.state.title}</b> by {this.state.artist}</p>

            {this.state.wordContainers.map( (wordContainer, i) => {
              return (
                <WordContainer
                  text={wordContainer.text}
                  solfege={wordContainer.solfege}
                  onClick={this.handleWordClick}
                  key={i}
                  id={i}
                  selected={wordContainer.selected}
                />
              )
            })}
        </div>
      </div>

      <InputForm onLyricsSubmit={this.handleLyricsSubmit} />

    <TodoApp />

    </div>
  )}
}

class LyricsContainer extends Component {
  render() {
    return (
      <div>
        <div style={{
          textAlign: 'center',
          border: 'solid black 1px',
          marginTop: '10'
          }}>
          <p>These are my beautiful word containers</p>

            {this.props.words.map( (word, i) => {
              return (
                <WordContainer
                  text={word}
                  onClick={this.props.onWordClick}
                  key={i}
                  id={i}
                />
              )
            })}
        </div>
    </div>

    )
  }
}
