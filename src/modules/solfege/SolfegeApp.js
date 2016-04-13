import React, { Component } from 'react';
import BiggerClick from './BiggerClick'
import SolfegeButton from './SolfegeButton'

export default class SolfegeApp extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
    <div>
      <h1 style= {{
        textAlign: 'center',
        background: '#44EEBB',
        color:'blue'}}>
        What a Nice Solfege Area</h1>
        <h2>Clicking On a Solfege Button Writes It's Text to the Console</h2>
        <div style={{
          background: '#44EEBB',
          textAlign: 'center'
          }}>
          <SolfegeButton text='Do'/>
          <SolfegeButton text='Re'/>
          <SolfegeButton text='Mi'/>
          <SolfegeButton text='Fa'/>
          <SolfegeButton text='So'/>
          <SolfegeButton text='La'/>
          <SolfegeButton text='Ti'/>
          </div>

        <BiggerClick/>





    </div>
  )}
}
