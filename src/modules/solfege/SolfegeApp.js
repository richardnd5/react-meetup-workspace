import React, { Component } from 'react';
import SolfegeButton from './SolfegeButton'
import DeleteButton from './deleteButton'
import WordContainer from './WordContainer'
import InputForm from './inputForm'
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
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleLyricsSubmit(song) {
    // var lyricsNoBreaks = wordContainer.lyrics.replace(/\n/g, " [br] ");
    // //create an array with each lyric word as an element
    var wordArray = song.lyrics.split(' ');

    var wordContainerArray = wordArray.map( (word) => {
      return {
        solfege: [],
        text: word,
        selected: false,
      }
    })

    this.setState({
      title: song.title,
      artist: song.artist,
      wordContainers: wordContainerArray
    })

  }

  handleWordClick(wordId) {

    const wordContainers = this.state.wordContainers.map((word, i) => {
      return Object.assign({}, word, {
        selected: i === wordId
      });
    })
    //ternary operator
    this.setState({
      wordContainers
    })

  }

  handleSolfegeClick(text, color) {

    const wordContainers = this.state.wordContainers

    wordContainers.map( (wordContainer) => {
      if (wordContainer.selected) {
        wordContainer.solfege.push({
          text,
          color
        })
      }
    })

    this.setState({
        wordContainers
    })
  }

  handleDeleteClick() {

    const wordContainers = this.state.wordContainers

    wordContainers.map( (wordContainer) => {
      if (wordContainer.selected) {
        wordContainer.solfege.pop()
      }
    })

    this.setState({
        wordContainers
    })
  }

  render(){

    const { title, artist, wordContainers } = this.state

    return(
    <div>

      <h1>Solfege Your Lyrics</h1>

      <div>
        <SolfegeButton text='Do' color='#ff0000' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='Re' color='#ff751a' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='Mi' color='#ffff00' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='Fa' color='#47d147' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='So' color='#2d864d' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='La' color='#4477DD' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='Ti' color='#cc0099' onClick={this.handleSolfegeClick} />
        <SolfegeButton text='Delete' color='gray' onClick={this.handleDeleteClick} />
      </div>

      <div>
        <div style={{
          marginTop: '40'
          }}>

          {title && <p style={{margin: 5}}><b>{title}</b> by {artist}</p>}

            {wordContainers.map( (wordContainer, i) => {
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

    </div>
  )}
}
