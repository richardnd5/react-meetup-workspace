import React, { Component } from 'react';
import SolfegeContainer from './SolfegeContainer';
import TodoApp from './Todo';

export default class WordContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solfege: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('yo you clicked on a word')

    this.state = {
      selected: true
    }

    this.props.onClick(this.props.id);
  }

  myFunciton() {
    console.log('you Diet Iet')
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        style= {{
          border: this.props.selected ? 'solid red 3px' : 'solid blue 1px',
          borderRadius: '5%',
          margin: 5,
          padding: 5,
          display: 'inline-block',
          cursor: 'pointer',
        }}>
        <div>
          {this.props.solfege.map( (syl, i) => {
            return (
              <span style={{
                color: syl.color,
                padding: 3}}>
                {syl.text}
              </span>
            )
          })}
        </div>
        <div>{this.props.text}</div>

      </div>
      )
    }
  }
