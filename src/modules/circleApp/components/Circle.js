import React, { Component } from 'react';


export default class Circle extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div
      onClick={this.handleClick}
      style={{
          textAlign: 'center',
          width: 40,
          height: 40,
          float: 'left',
          margin: 2,
          marginTop: 20,
          borderRadius: '50%',
          border: 'solid',
          borderColor: '#3333EE',
          position:'relative',
          backgroundColor: this.props.completed ? '#3664CC' : '#4EEDEE'
        }}>
      </div>
    )
  }
}
