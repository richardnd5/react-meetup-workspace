import React, { Component } from 'react';

export default class WordContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('yo you clicked on a word')
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div style= {{
        border: 'solid blue 1px',
        borderRadius: '5%',
        margin: 5,
        padding: 5,
        display: 'inline-block',
        cursor: 'pointer',
      }} onClick={this.handleClick}>

        <div>
          {this.props.text}
        </div>

      </div>
      )
    }
  }
