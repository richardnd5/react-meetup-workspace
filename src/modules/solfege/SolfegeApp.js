import React, { Component } from 'react';
import BiggerClick from './BiggerClick';
import SolfegeButton from './SolfegeButton';
import WordContainer from './WordContainer'
import AddWord from './AddWord'

export default class SolfegeApp extends Component {

  constructor(props) {
    super(props);
    this.handleAddSyllable = this.handleAddSyllable.bind(this);

  }

  handleAddSyllable(){
    console.log('lkjsdf')
  }


  render(){
    return(
    <div>
      <h1 style= {{
        textAlign: 'center',
        color:'black'}}>
        What a Nice Solfege Area</h1>

        <div style= {{border: '1px solid blue'}}>
        <WordContainer text= 'YES!'/>
        <WordContainer text= 'I'/>
        <WordContainer text= 'do'/>
        <WordContainer text= 'I'/>
        <WordContainer text= 'believe'/>

        </div>
        <AddWord/>

    </div>
  )}
}
