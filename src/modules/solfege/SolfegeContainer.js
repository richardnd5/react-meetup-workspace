import React, { Component } from 'react';
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
      textAlign: 'left',
      display: 'inline-block',
      paddingRight: 8

    }}>

    <SolfegeSyllable color= 'red' text= 'Do'/>
    <SolfegeSyllable color= 'pink' text= 'Ti'/>
    <SolfegeSyllable color= '#DDDD33' text= 'Mi'/>


    </div>
  )}
}
