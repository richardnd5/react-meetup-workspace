import React, { Component } from 'react';

export default class DeleteButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClick();
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
        Delete</div>
    )
  }
}
