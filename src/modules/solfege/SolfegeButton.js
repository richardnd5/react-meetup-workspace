// import React from 'react';
import React, { Component } from 'react';


// export default class BiggerClick extends Component {

export default class SolfegeButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.props.text);
  }

  render(){

    return(

      <div style= {{
        background: 'red',
        width: 40,
        height: 40,
        borderRadius: "5%",
        margin: 3,
        display: 'inline-block',
      }} onClick= {this.handleClick}>
        <div style= {{
          textAlign: 'center',
          verticalAlign: 'middle',
          lineHeight: '40px',}}> {this.props.text}

          </div>

      </div>

    )
  }
}
// const SolfegeButton = ({name}) => (
//
// )
//
// export default SolfegeButton;
