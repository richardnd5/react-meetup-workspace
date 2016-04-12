import React, { Component } from 'react';

import SolfegeButton from './SolfegeButton';

export default class SolfegeContainer extends Component {
  render() {
    return (
      <div style= {{
        textAlign: 'center'
      }}>
      <SolfegeButton name='Do'/>
      <SolfegeButton name='Re'/>
      <SolfegeButton name='Mi'/>
      <SolfegeButton name='Fa'/>
      <SolfegeButton name='So'/>
      <SolfegeButton name='La'/>
      <SolfegeButton name='Ti'/>

      </div>
    )
  }
}
