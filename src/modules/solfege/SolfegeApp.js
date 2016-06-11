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
      solfegeButtons: [
        {
          text: 'Do',
          color: '#ff0000'
        },
        {
          text: 'Re',
          color: '#ff751a'
        },
        {
          text: 'Mi',
          color: '#ffff00'
        },
        {
          text: 'Fa',
          color: '#47d147'
        },
        {
          text: 'So',
          color: '#2d864d'
        },
        {
          text: 'La',
          color: '#4477DD'
        },
        {
          text: 'Ti',
          color: '#cc0099'
        },

      ],
      title: '',
      artist: '',
      wordContainers: [],
    };

    this.handleLyricsSubmit = this.handleLyricsSubmit.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);
    this.handleSolfegeClick = this.handleSolfegeClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleLyricsSubmit(title, artist, lyrics) {
    // var lyricsNoBreaks = wordContainer.lyrics.replace(/\n/g, " [br] ");
    // //create an array with each lyric word as an element
    // const wordArray = lyrics.split(/\n/g);
    const wordArray = lyrics.split(" ");

    const wordContainers = wordArray.map( (word) => {
      return {
        solfege: [],
        text: word,
        selected: false,
      }
    })

    this.setState({
      title,
      artist,
      wordContainers
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

    const { solfegeButtons, title, artist, wordContainers } = this.state

    return(
    <div>

      <h1>Solfege Your Lyrics</h1>

      <div>

        {solfegeButtons.map( (button, i) => {
          return (
            <SolfegeButton
              text={button.text}
              color={button.color}
              onClick={this.handleSolfegeClick}
              key={i}
            />
          )
        })}
        <SolfegeButton text='delete' color='gray' onClick={this.handleDeleteClick} />
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
