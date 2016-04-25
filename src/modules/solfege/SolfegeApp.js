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
      title: 'Catchy Title',
      artist: 'Really Cool Artist',
      wordArray: ['These', 'are', 'some', 'awesome', 'default', 'lyrics'],
      wordContainers: []
    };

    this.handleLyricsSubmit = this.handleLyricsSubmit.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);
  }

  handleLyricsSubmit(song) {

    console.log(song)

    // var lyricsNoBreaks = wordContainer.lyrics.replace(/\n/g, " [br] ");
    // //create an array with each lyric word as an element
    var wordArray = song.lyrics.split(' ');
    console.log(wordArray);

    this.setState({
      title: song.title,
      artist: song.artist,
      wordArray: wordArray
    });

    console.log(this.state);
  }

  handleWordClick(wordId) {

    // let newTodos = this.state.todos;
    //
    // newTodos[todoId].completed = !newTodos[todoId].completed;
    //
    // this.setState({
    //   todos: newTodos
    // });
    console.log(wordId)
  }

  render(){
    return(
    <div>

      <h1>Solfege Your Lyrics</h1>

      <div>
        <SolfegeButton text='Do' color='#ff0000'/>
        <SolfegeButton text='Re' color='#ff751a'/>
        <SolfegeButton text='Mi' color='#ffff00'/>
        <SolfegeButton text='Fa' color='#47d147'/>
        <SolfegeButton text='So' color='#2d864d'/>
        <SolfegeButton text='La' color='#4477DD'/>
        <SolfegeButton text='Ti' color='#cc0099'/>
      </div>

      <div>
        <div style={{
          marginTop: '40'
          }}>
          <p style={{margin: 5}}><b>{this.state.title}</b> by {this.state.artist}</p>

            {this.state.wordArray.map( (word, i) => {
              return (
                <WordContainer
                  text={word}
                  onClick={this.handleWordClick}
                  key={i}
                  id={i}
                />
              )
            })}
        </div>
      </div>

      <InputForm onLyricsSubmit={this.handleLyricsSubmit} />

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
