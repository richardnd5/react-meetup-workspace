import React, { Component, PropTypes } from 'react';

const ADD = '+';
const DIVIDE = '/';
const MULTIPLY = '*';
const SUBTRACT = '-';

const methods = {
  [ADD]: (curr, num) => curr + num,
  [DIVIDE]: (curr, num) => curr / num,
  [MULTIPLY]: (curr, num) => curr * num,
  [SUBTRACT]: (curr, num) => curr - num
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      nextNum: 0,
      nextMethod: ''
    };

    this.handleMethodBtnClick = this.handleMethodBtnClick.bind(this);
    this.handleNumBtnClick = this.handleNumBtnClick.bind(this);
  }

  handleNumBtnClick(e) {
    if(this.state.nextMethod !== '') {
      return this.setState({
        nextNum: e.target.value
      })
    }
  }

  calculate(method) {
    let result;

    if(this.props.methods.hasOwnProperty(method)) {
      result = this.props.methods[method];
    }

    this.setState({
      value: result,
      nextMethod: ''
    });
  }

  handleMethodBtnClick(e) {
    this.setState({
      nextMethod: e.target.value
    })
  }

  render() {
    return (
      <div style={{
        width: 300,
        // overflow: 'hidden'
      }}>
        <div style={{
          fontSize: 20,
          padding: 10,
          // textAlign: 'right'
        }}>{this.state.value}</div>
        {Object.keys(this.props.methods).map(method =>
          <Button value={method} onClick={this.handleMethodBtnClick} />
        )}
        <div style={{
          display: 'flex',
          // flexDirection: 'row-reverse'
        }}>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num =>
            <Button value={num} onClick={this.handleNumBtnClick} />
          )}
        </div>
      </div>
    );
  }
};

Calculator.defaultProps = {
  methods
}

Calculator.propTypes = {
  methods: PropTypes.object.isRequired
}

function Button(props) {
  return (
    <button onClick={props.onClick} style={{
      display: 'inline-block',
      fontSize: 18,
      borderRadius: 0,
      backgroundColor: 'lightgray',
      color: '#000',
      padding: '1em',
      border: '1px solid white'
    }}>{props.value}</button>
  );
}

export default Calculator;
