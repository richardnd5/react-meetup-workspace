// import React from 'react';
import React, { Component } from 'react';

// export default class BiggerClick extends Component {

export default class SolfegeSyllable extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    console.log(this.props.text);

  }

  render(){

    return(

      <div style= {{color: this.props.color, display: 'inline-block', paddingRight: 5}}>{this.props.text} </div>

    )
  }
}
