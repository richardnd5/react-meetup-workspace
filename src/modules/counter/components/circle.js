import React, { Component } from 'react';

class Circle extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
    console.log('hi')
  }

  render() {
    return (
      <div style={{float: 'left', width: 40, height: 40}}>

        <div style={{
          borderRadius: '50%',
          background: '#4455EE',
          width: '100%',
          height: '100%'
        }}></div>

        </div>
        )
      }
    }

    export default Circle;
