import React, { Component } from 'react';
import BiggerClick from './BiggerClick'
import SolfegeButton from './SolfegeButton'
import WordContainer from './WordContainer'

export default class SolfegeApp extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
    <div>
      <h1 style= {{
        textAlign: 'center',
        color:'black'}}>
        What a Nice Solfege Area</h1>
        <div style={{
          textAlign: 'center',
          border: 'solid black 1px'
          }}>
          <SolfegeButton text='Do' color='#ff0000'/>
          <SolfegeButton text='Re' color='#ff751a'/>
          <SolfegeButton text='Mi' color='#ffff00'/>
          <SolfegeButton text='Fa' color='#47d147'/>
          <SolfegeButton text='So' color='#2d864d'/>
          <SolfegeButton text='La' color='#4477DD'/>
          <SolfegeButton text='Ti' color='#cc0099'/>
          </div>
        <div style={{
          textAlign: 'center',
          border: 'solid black 1px',
          marginTop: '100'
          }}>
          <p>These are my beautiful word containers</p>
          <WordContainer />
          <WordContainer />
          <WordContainer />
          <WordContainer />
          <WordContainer />
        </div>
    </div>
  )}
}
