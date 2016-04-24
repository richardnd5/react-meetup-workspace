import React, { Component } from 'react';

export default class WordContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('yo')
  }


  render() {
    return (
      <div style= {{
        background: '#4433EE',
        width: 60,
        height: 60,
        border: 'solid blue 1px',
        borderRadius: '5%',
        margin: 3,
        display: 'inline-block',
      }} onClick={this.handleClick}>
      <div style= {{
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '40px',}}>

        {name}
        </div>

        </div>
      )
    }
  }
