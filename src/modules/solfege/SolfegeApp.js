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
      wordContainers: ['I', 'like', 'pyjamas']
    };

    this.handleLyricsSubmit = this.handleLyricsSubmit.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);
  }

  handleLyricsSubmit(wordContainer) {

    console.log(wordContainer)

    // var lyricsNoBreaks = wordContainer.lyrics.replace(/\n/g, " [br] ");
    // //create an array with each lyric word as an element
    var wordArray = wordContainer.lyrics.split(' ');
    console.log(wordArray);

    this.setState({
      wordContainers: wordArray
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

      <h1 style= {{
        textAlign: 'center',
        color:'black'}}>
        Solfege Your Lyrics</h1>

      <div style={{
        textAlign: 'center',
        }}>
        <SolfegeButton text='Do' color='#ff0000'/>
        <SolfegeButton text='Re' color='#ff751a'/>
        <SolfegeButton text='Mi' color='#ffff00'/>
        <SolfegeButton text='Fa' color='#47d147'/>
        <SolfegeButton text='So' color='#2d864d'/>
        <SolfegeButton text='La' color='#4477DD'/>
        <SolfegeButton text='Ti' color='#cc0099'/>
      </div>

      <LyricsContainer wordContainers={this.state.wordContainers} onWordClick={this.handleWordClick}/>

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

            {this.props.wordContainers.map( (word, i) => {
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
