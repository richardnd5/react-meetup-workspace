import React, { Component } from 'react';
import BiggerClick from './BiggerClick';
import SolfegeButton from './SolfegeButton';
import SolfegeSyllable from './SolfegeSyllable';
import SolfegeContainer from './SolfegeContainer';
import AddWord from './AddWord';

export default class WordContainer extends Component {

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
      padding: 8

    }}>
    <SolfegeContainer />
    <div>{this.props.text}</div>

    </div>

  )}
}
