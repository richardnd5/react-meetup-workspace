import React, { Component } from 'react';
import BiggerClick from './BiggerClick';
import SolfegeButton from './SolfegeButton';
import SolfegeSyllable from './SolfegeSyllable';
import AddWord from './AddWord';

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
