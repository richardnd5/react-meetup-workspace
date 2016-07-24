import React, { Component } from 'react';
import Circle from './Circle'

export default class CircleContainer extends Component {

  render() {
    return (
      <div>
        {this.props.circles.map( (circle, i) => {
          return (
            <Circle
              text={circle.text}
              key={i}
              onClick={this.props.onCircleClick}
              id={i}
              completed={circle.completed}
            />
          )
        })}
      </div>
    )
  }
}
