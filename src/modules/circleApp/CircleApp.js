import React, { Component } from 'react';
import Circle from './components/Circle'
import CircleContainer from './components/CircleContainer'
import SubmitCircleButton from './components/SubmitCircleButton'


class CircleApp extends Component {

  constructor(props) {
    super(props);

      let circles = []

      for(let i = 1; i <= 6; i++ ) {
        circles.push({})
      }

      this.state = {
        circles
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCircleToggle = this.handleCircleToggle.bind(this);

  }

  handleSubmit(circle) {

    this.setState({
      circles: [...this.state.circles, circle]

    });
  }

  handleCircleToggle(circleNumber) {

    let circleArray = this.state.circles;

    circleArray[circleNumber].completed = !circleArray[circleNumber].completed;

    this.setState({circles: circleArray}); }

  render() {
    return (
      <div style={{background: "linear-gradient(down, red, yellow)"}}>

        <h1 style={{
          // position: 'absolute',
          textAlign: 'center'

        }}>Circle Central!</h1>

        <div style= {{}}><SubmitCircleButton handleSubmit={this.handleSubmit} /></div>
        <CircleContainer
          circles={this.state.circles}
          onCircleClick= {this.handleCircleToggle}
          />
          {/*<LoopApp />*/}



      </div>
    )
  }
  }
export default CircleApp;
