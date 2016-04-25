import React, { Component } from 'react';
import BiggerClick from './BiggerClick';
import SolfegeButton from './SolfegeButton';
import SolfegeSyllable from './SolfegeSyllable';

export default class SolfegeContainer extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
    <div style= {{
      textAlign: 'center',
      color:'black',
      border: 'solid black 1px',
      margin: 10,
      textAlign: 'left',
      display: 'inline-block',
      padding: 8

    }}>

    <SolfegeSyllable color= 'red' text= 'Do'/>
    <SolfegeSyllable color= 'pink' text= 'Ti'/>
    <SolfegeSyllable color= '#DDDD33' text= 'Mi'/>

    </div>
  )}
}
