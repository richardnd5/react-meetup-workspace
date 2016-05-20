import React, { Component } from 'react';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div onClick={this.handleClick} style={
        {textDecoration: this.props.completed ? 'line-through' : 'none'}}>
        {/*



          if(this.props.completed){
            line-through
          }else {
            none
          }



      */}
        {this.props.text}
      </div>
    )
  }
}

export default Todo;
