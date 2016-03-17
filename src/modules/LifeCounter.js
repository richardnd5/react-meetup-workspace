import React, { Component } from 'react';

class LifeCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lifeTotal : 40,
      chickens: 7
    };
    this.handleLifeChange = this.handleLifeChange.bind(this);
  }

  handleLifeChange(hopeForChickens) {
    this.setState({
      lifeTotal : this.state.lifeTotal + hopeForChickens,
      chickens : this.state.chickens - hopeForChickens
    })
  }

  render() {
    return(
    <div>
      <Pad
        lifeTotal={this.state.lifeTotal}
        chickens={this.state.chickens}/>
      <Button
        onClick={() => this.handleLifeChange(1)}
        text="Up"
      />
      <Button
        onClick={() => this.handleLifeChange(-1)}
        text="Down"
      />
    </div>
    )
  }
}

const Pad = ({ lifeTotal, chickens }) => (
  <div>
    <h1>{lifeTotal}</h1>
    <h2>Chickens: {chickens}</h2>
  </div>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text} so long chicken</button>
)

export default LifeCounter;
