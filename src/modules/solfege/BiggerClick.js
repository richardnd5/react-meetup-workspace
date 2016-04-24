import React, { Component } from 'react';

export default class BiggerClick extends Component {

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
        width: 40,
        height: 40,
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
