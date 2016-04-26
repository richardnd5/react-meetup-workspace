// import React from 'react';
import React, { Component } from 'react';

// export default class BiggerClick extends Component {

export default class SolfegeButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    // console.log(this.props.text);
    this.props.onClick(this.props.text, this.props.color);

  }

  render(){

    return(

      <div style= {{
        background: this.props.color,
        width: 60,
        height: 60,
        borderRadius: '5%',
        margin: 3,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }} onClick= {this.handleClick}>
        {this.props.text}</div>
    )
  }
}
