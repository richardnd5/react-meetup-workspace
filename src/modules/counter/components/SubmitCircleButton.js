import React, { Component } from 'react';

export default class SubmitCircle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({

    });
    this.setState({
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div onClick={this.handleSubmit} style= {{
        background: '#AAAADD',
        width: 58,
        paddingTop: 20,
        paddingBottom: 20,
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: '15%',
        margin: '0 auto',
        fontSize: 12,
        color: '#2222EE'}}>+Circle+</div>
    )
  }
}
