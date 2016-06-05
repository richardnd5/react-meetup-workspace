import React, { Component } from 'react';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
    console.log('so WHAT')

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
          color: '#EEEE44',
          position:'relative',
          backgroundColor: this.props.completed ? '#3EE4CC' : '#4EEDEE'}}>
        {this.props.text}
      </div>
    )
  }
}
